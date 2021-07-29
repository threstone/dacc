/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module hall {

	export class UI_Hall extends fairygui.GComponent {

		public m_left_bg: fairygui.GLoader;
		public m_right_bg: fairygui.GLoader;
		public m_login: UI_Login;

		public static URL: string = "ui://sly852qpi7mx0";

		public static createInstance(): UI_Hall {
			return <UI_Hall><any>(fairygui.UIPackage.createObject("hall", "Hall"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_left_bg = <fairygui.GLoader><any>(this.getChild("left_bg"));
			this.m_right_bg = <fairygui.GLoader><any>(this.getChild("right_bg"));
			this.m_login = <UI_Login><any>(this.getChild("login"));
		}
	}
}