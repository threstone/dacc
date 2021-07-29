//@ts-ignore
import * as protobuf from "protobufjs"
//游戏封包的结构
export interface IGameMessage {
  cmd: number
  scmd: number
  toJSON(): { [k: string]: any };
}


let logger = console
export class ProtoBufEncoder {

  // private static messageClasses_C: Map<string, any> = new Map<string, any>()
  // private static messageClasses_S: Map<string, any> = new Map<string, any>()
  private static messagehandles_: Map<number, Function> = new Map<number, Function>()
  private static protoBufWriter: protobuf.Writer = protobuf.Writer.create()
  private static protoBufReader: protobuf.Reader = protobuf.Reader.create(Buffer.alloc(1))

  private static protoBufClass: Map<number, any> = new Map<number, any>()

  //添加一个协议模块 prefix 为匹配消息前缀
  public static addProtoModule(protoModule: any, handle: any) {
    for (let key in protoModule) {
      if (key.startsWith("C_") || key.startsWith("S_")) {
        const protoClass = protoModule[key]

        if (isNaN(protoClass.prototype.cmd) || isNaN(protoClass.prototype.scmd)) {
          throw new Error("协议头cmd , scmd 值错误," + key)
        }


        if (protoClass.prototype.cmd < 0 || protoClass.prototype.cmd > 255) {
          throw new Error("协议头cmd ,范围错误," + key + "," + protoClass.prototype.cmd)
        }

        if (protoClass.prototype.scmd < 0 || protoClass.prototype.scmd > 255) {
          throw new Error("协议头cmdid ,范围错误," + key + "," + protoClass.prototype.scmd)
        }

        let protoIndex: number = (protoClass.prototype.cmd - 1) * 255 + protoClass.prototype.scmd
        ProtoBufEncoder.protoBufClass.set(protoIndex, protoClass)

        //客户端的代码需要注册一下
        if (key.startsWith("C_")) {
          console.log("添加协议:", protoClass.name, protoClass.prototype.cmd, protoClass.prototype.scmd)
          if (handle && handle[protoClass.name]) {
            this.messagehandles_.set(protoIndex, handle[protoClass.name])
          } else {
            console.error("客户端协议:", protoIndex, "  ", protoClass.name, "未找到处理函数")
          }
        }

      }
    }
  }

  public static init() {

    // 给protobuf的默认编码函数 增加 一个
    const protoBufAny: any = protobuf
    protoBufAny.Writer.prototype.finishWithSysCmd = function (sysid: number, cmdid: number) {
      let head = this.head.next
      const buf = this.constructor.alloc(this.len + 2)
      buf.writeUInt8(sysid, 0)
      buf.writeUInt8(cmdid, 1)
      let pos = 2
      while (head) {
        head.fn(head.val, buf, pos)
        pos += head.len
        head = head.next
      }
      return buf
    }

    const raw = protoBufAny.Reader.prototype.int64

    protoBufAny.Reader.prototype.int64 = function () {
      const result = raw.call(this)
      if (typeof (result) === "number") {
        return result
      } else {
        return result.toNumber()
      }
    }
  }


  public static encode(message: IGameMessage): Buffer {
    if (!message) {
      return
    }
    let index = (message.cmd - 1) * 255 + message.scmd//(protoClass.prototype.cmd - 1) * 255 + protoClass.prototype.scmd
    let messageClass = ProtoBufEncoder.protoBufClass.get(index)
    if (!messageClass) {
      throw new Error("未找到注册的协议编码类:" + index)
    }
    ProtoBufEncoder.protoBufWriter.reset()
    const writer = messageClass.encode(message, ProtoBufEncoder.protoBufWriter)
    return writer.finishWithSysCmd(message.cmd, message.scmd)
  }

  public static decode(buffer: Buffer, offset: number): IGameMessage {
    if (buffer.length < 2) {
      logger.error("protobuf decode err! buffer长度小于2")
      return
    }
    const cmd = buffer.readUInt8(offset)
    const scmd = buffer.readUInt8(offset + 1)
    const messageIndex = (cmd - 1) * 255 + scmd
    const messageClass = ProtoBufEncoder.protoBufClass.get(messageIndex)

    if (!messageClass) {
      console.error("无法获取协议:", cmd, scmd)
      return null
    }

    ProtoBufEncoder.protoBufReader.buf = buffer
    ProtoBufEncoder.protoBufReader.pos = offset + 2
    ProtoBufEncoder.protoBufReader.len = buffer.length
    let result = null
    try {
      result = messageClass.decode(ProtoBufEncoder.protoBufReader)
    } catch (e) {
      console.error("解码消息失败 ：", messageClass.name)
    }

    return result
  }

  //获取注册执行的HandleFunction
  public static getHandleFunction(cmd: number, scmd: number): Function {
    const messageIndex = (cmd - 1) * 255 + scmd
    return ProtoBufEncoder.messagehandles_.get(messageIndex)
  }

}
