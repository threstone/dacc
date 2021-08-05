export class Utils {
    static arrayStringSplit(arr: string[]): any {
        let args: any = {}
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            let arg = element.split('=')
            let value: string | number = parseInt(arg[1])
            if (arg[1].indexOf('.') != -1) {
                value = arg[1]
            }
            if (Number.isNaN(value)) {
                value = arg[1]
            }
            args[arg[0]] = value
        }
        return args
    }
}