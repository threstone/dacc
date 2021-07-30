class DocumentHelper {
    static init() {
        this.initKeyInput()
    }

    static initKeyInput() {
        document.addEventListener("keydown", function (e: any) {
            GameDispatcher.getInstance().emit('KeyInput', e.key)
        });
    }
}