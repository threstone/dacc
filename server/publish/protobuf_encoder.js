"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtoBufEncoder = void 0;
//@ts-ignore
const log4js_1 = require("log4js");
const protobuf = require("protobufjs");
let logger = log4js_1.getLogger();
class ProtoBufEncoder {
    static setHandle(cmd, scmd, fun) {
        let protoIndex = cmd + "_" + scmd;
        if (this.messagehandles_[protoIndex]) {
            logger.error(`该位置已有注册函数 cmd:${cmd} scmd:${scmd}`);
            return;
        }
        this.messagehandles_.set(protoIndex, fun);
    }
    static setProtoClass(cmd, scmd, protoClass) {
        let protoIndex = cmd + "_" + scmd;
        if (this.messagehandles_[protoIndex]) {
            logger.error(`该位置已有protoClass cmd:${cmd} scmd:${scmd}`);
            return;
        }
        ProtoBufEncoder.protoBufClass.set(protoIndex, protoClass);
    }
    //添加一个协议模块 prefix 为匹配消息前缀
    static addProtoModule(protoModule, handle) {
        for (let key in protoModule) {
            if (key.startsWith("C_") || key.startsWith("S_")) {
                const protoClass = protoModule[key];
                if (isNaN(protoClass.prototype.cmd) || isNaN(protoClass.prototype.scmd)) {
                    throw new Error("协议头cmd , scmd 值错误," + key);
                }
                let protoIndex = protoClass.prototype.cmd + "_" + protoClass.prototype.scmd;
                ProtoBufEncoder.protoBufClass.set(protoIndex, protoClass);
                //客户端的代码需要注册一下
                if (key.startsWith("C_")) {
                    console.log("添加协议:", protoClass.name);
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
            const buf = this.constructor.alloc(this.len + 8);
            buf.writeInt32BE(sysid, 0);
            buf.writeInt32BE(cmdid, 4);
            let pos = 8;
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
        let index = message.cmd + "_" + message.scmd;
        let messageClass = ProtoBufEncoder.protoBufClass.get(index);
        if (!messageClass) {
            throw new Error("未找到注册的协议编码类:" + index);
        }
        ProtoBufEncoder.protoBufWriter.reset();
        const writer = messageClass.encode(message, ProtoBufEncoder.protoBufWriter);
        return writer.finishWithSysCmd(message.cmd, message.scmd);
    }
    static decode(buffer, offset) {
        if (buffer.length < 8) {
            logger.error("protobuf decode err! buffer长度小于8");
            return;
        }
        const cmd = buffer.readInt32BE(offset);
        const scmd = buffer.readInt32BE(offset + 4);
        const messageIndex = cmd + "_" + scmd;
        const messageClass = ProtoBufEncoder.protoBufClass.get(messageIndex);
        if (!messageClass) {
            console.error("无法获取协议:", cmd, scmd);
            return null;
        }
        ProtoBufEncoder.protoBufReader.buf = buffer;
        ProtoBufEncoder.protoBufReader.pos = offset + 8;
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
        const messageIndex = cmd + "_" + scmd;
        return ProtoBufEncoder.messagehandles_.get(messageIndex);
    }
}
exports.ProtoBufEncoder = ProtoBufEncoder;
ProtoBufEncoder.messagehandles_ = new Map();
ProtoBufEncoder.protoBufWriter = protobuf.Writer.create();
ProtoBufEncoder.protoBufReader = protobuf.Reader.create(Buffer.alloc(1));
ProtoBufEncoder.protoBufClass = new Map();
