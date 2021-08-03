class Main extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin

            context.onUpdate = () => {

            }
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource()
        Socket.getInstance()
        this.initFuiHall()
        this.initHandle()
        DocumentHelper.init()
    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }


    private initFuiHall() {
        this.stage.addChild(fairygui.GRoot.inst.displayObject);
        GlobalController.init(this.stage)
    }

    /**
     * 自动映射
     */
    private initHandle() {
        let funObj: any = {}
        for (let n in GlobalController) {
            let name: any = n
            //如果是Controller  拿出model寻找映射函数
            if (name.endsWith('Controller')) {
                let model: any = GlobalController[name].model
                for (let funName in model) {
                    let funNameAny: any = funName
                    if (funNameAny.startsWith('S_')) {
                        //记录函数
                        if (funObj[funName]) {
                            console.error(`${funName}已有函数记录!`)
                        }
                        funObj[funName] = model[funName].bind(model)
                    }
                }
            }
        }

        for (let n in window) {
            let name: any = n
            if (name.endsWith('Pto')) {
                let proto = window[name]
                MessageManager.addProtoModule(proto, funObj)
            }
        }
    }


}