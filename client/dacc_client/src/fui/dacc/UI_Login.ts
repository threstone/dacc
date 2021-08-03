/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module dacc {

	export class UI_Login extends fairygui.GComponent {

		public m_input_bg:fairygui.GGraph;
		public m_input_text:fairygui.GTextInput;
		public m_login_btn:UI_BtnClick;

		public static URL:string = "ui://sly852qpinlo3";

		public static createInstance():UI_Login {
			return <UI_Login><any>(fairygui.UIPackage.createObject("dacc","Login"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_input_bg = <fairygui.GGraph><any>(this.getChild("input_bg"));
			this.m_input_text = <fairygui.GTextInput><any>(this.getChild("input_text"));
			this.m_login_btn = <UI_BtnClick><any>(this.getChild("login_btn"));
		}
	}
}