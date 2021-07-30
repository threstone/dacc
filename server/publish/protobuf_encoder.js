"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtoBufEncoder = void 0;
//@ts-ignore
const log4js_1 = require("log4js");
const protobuf = require("protobufjs");
let logger = log4js_1.getLogger();
class ProtoBufEncoder {
    //添加一个协议模块 prefix 为匹配消息前缀
    static addProtoModule(protoModule, handle) {
        for (let key in protoModule) {
            if (key.startsWith("C_") || key.startsWith("S_")) {
                const protoClass = protoModule[key];
                if (isNaN(protoClass.prototype.cmd) || isNaN(protoClass.prototype.scmd)) {
                    throw new Error("协议头cmd , scmd 值错误," + key);
                }
                if (protoClass.prototype.cmd < 0 || protoClass.prototype.cmd > 255) {
                    throw new Error("协议头cmd ,范围错误," + key + "," + protoClass.prototype.cmd);
                }
                if (protoClass.prototype.scmd < 0 || protoClass.prototype.scmd > 255) {
                    throw new Error("协议头cmdid ,范围错误," + key + "," + protoClass.prototype.scmd);
                }
                let protoIndex = protoClass.prototype.cmd * 255 + protoClass.prototype.scmd;
                ProtoBufEncoder.protoBufClass.set(protoIndex, protoClass);
                //客户端的代码需要注册一下
                if (key.startsWith("C_")) {
                    console.log("添加协议:", protoClass.name, protoClass.prototype.cmd, protoClass.prototype.scmd);
                    if (handle && handle[protoClass.name]) {
                        this.messagehandles_.set(protoIndex, handle[protoClass.name]);
                    }
                    else {
                        console.error("客户端协议:", protoIndex, "  ", protoClass.name, "未找到处理函数");
                    }
                }
            }
        }
    }
    static init() {
        // 给protobuf的默认编码函数 增加 一个
        const protoBufAny = protobuf;
        protoBufAny.Writer.prototype.finishWithSysCmd = function (sysid, cmdid) {
            let head = this.head.next;
            const buf = this.constructor.alloc(this.len + 2);
            buf.writeUInt8(sysid, 0);
            buf.writeUInt8(cmdid, 1);
            let pos = 2;
            while (head) {
                head.fn(head.val, buf, pos);
                pos += head.len;
                head = head.next;
            }
            return buf;
        };
        const raw = protoBufAny.Reader.prototype.int64;
        protoBufAny.Reader.prototype.int64 = function () {
            const result = raw.call(this);
            if (typeof (result) === "number") {
                return result;
            }
            else {
                return result.toNumber();
            }
        };
    }
    static encode(message) {
        if (!message) {
            return;
        }
        let index = message.cmd * 255 + message.scmd;
        let messageClass = ProtoBufEncoder.protoBufClass.get(index);
        if (!messageClass) {
            throw new Error("未找到注册的协议编码类:" + index);
        }
        ProtoBufEncoder.protoBufWriter.reset();
        const writer = messageClass.encode(message, ProtoBufEncoder.protoBufWriter);
        return writer.finishWithSysCmd(message.cmd, message.scmd);
    }
    static decode(buffer, offset) {
        if (buffer.length < 2) {
            logger.error("protobuf decode err! buffer长度小于2");
            return;
        }
        const cmd = buffer.readUInt8(offset);
        const scmd = buffer.readUInt8(offset + 1);
        const messageIndex = cmd * 255 + scmd;
        const messageClass = ProtoBufEncoder.protoBufClass.get(messageIndex);
        if (!messageClass) {
            console.error("无法获取协议:", cmd, scmd);
            return null;
        }
        ProtoBufEncoder.protoBufReader.buf = buffer;
        ProtoBufEncoder.protoBufReader.pos = offset + 2;
        ProtoBufEncoder.protoBufReader.len = buffer.length;
        let result = null;
        try {
            result = messageClass.decode(ProtoBufEncoder.protoBufReader);
        }
        catch (e) {
            console.error("解码消息失败 ：", messageClass.name);
        }
        return result;
    }
    //获取注册执行的HandleFunction
    static getHandleFunction(cmd, scmd) {
        const messageIndex = cmd * 255 + scmd;
        return ProtoBufEncoder.messagehandles_.get(messageIndex);
    }
}
exports.ProtoBufEncoder = ProtoBufEncoder;
// private static messageClasses_C: Map<string, any> = new Map<string, any>()
// private static messageClasses_S: Map<string, any> = new Map<string, any>()
ProtoBufEncoder.messagehandles_ = new Map();
ProtoBufEncoder.protoBufWriter = protobuf.Writer.create();
ProtoBufEncoder.protoBufReader = protobuf.Reader.create(Buffer.alloc(1));
ProtoBufEncoder.protoBufClass = new Map();
