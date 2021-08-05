"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
class Utils {
    static arrayStringSplit(arr) {
        let args = {};
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            let arg = element.split('=');
            let value = parseInt(arg[1]);
            if (arg[1].indexOf('.') != -1) {
                value = arg[1];
            }
            if (Number.isNaN(value)) {
                value = arg[1];
            }
            args[arg[0]] = value;
        }
        return args;
    }
}
exports.Utils = Utils;
