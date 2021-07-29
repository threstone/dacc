/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module dacc {

	export class UI_Hall extends fairygui.GComponent {

		public m_bg:fairygui.GLoader;
		public m_mini_chat:UI_MiniChat;

		public static URL:string = "ui://sly852qpi7mx0";

		public static createInstance():UI_Hall {
			return <UI_Hall><any>(fairygui.UIPackage.createObject("dacc","Hall"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_bg = <fairygui.GLoader><any>(this.getChild("bg"));
			this.m_mini_chat = <UI_MiniChat><any>(this.getChild("mini_chat"));
		}
	}
}