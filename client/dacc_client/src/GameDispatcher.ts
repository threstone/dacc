class GameDispatcher extends egret.EventDispatcher {

    private static _instance: GameDispatcher;
    public constructor() {
        super();
    }

    public static getInstance(): GameDispatcher {
        if (GameDispatcher._instance == null) {
            GameDispatcher._instance = new GameDispatcher();
        }
        return GameDispatcher._instance;
    }

    public addEventListener(eventName: string, func: Function, thisObj: any, useCapture: boolean = false, priority: number = 1): void {
        super.addEventListener(eventName, func, thisObj, useCapture, priority);
    }

    public removeEventListener(eventName: string, func: Function, thisObj: any, useCapture: boolean = false): void {
        super.removeEventListener(eventName, func, thisObj, useCapture);
    }

    public hasEventListener(eventName: string): boolean {
        return super.hasEventListener(eventName);
    }

    public once(eventName: string, func: Function, thisObj: any, useCapture: boolean = false): void {
        super.once(eventName, func, thisObj, useCapture)
    }

    public dispatchEvent(event: egret.Event): boolean {
        // var t1: number = egret.getTimer();
        // var result: boolean = super.dispatchEvent(event);
        // var gap: number = egret.getTimer() - t1;
        // if (gap > 5) {
        //     //console.log(StringUtil.substitute("send Evt gap = {1} name = {0}", event.type, gap));
        // }
        return super.dispatchEvent(event);
    }


    public emit(eventName: string, data?: any): boolean {

        return super.dispatchEvent(new egret.Event(eventName, false, false, data));

    }


    public willTrigger(eventName: string): boolean {
        return super.willTrigger(eventName);
    }
}

interface EventData {
    data: any
}