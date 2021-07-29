/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module hall {

	export class UI_Login extends fairygui.GComponent {

		public m_bg:fairygui.GGraph;
		public m_input_bg:fairygui.GGraph;
		public m_input_text:fairygui.GTextInput;
		public m_login_btn:UI_Click;
		public m_tips:fairygui.GTextField;

		public static URL:string = "ui://sly852qpinlo3";

		public static createInstance():UI_Login {
			return <UI_Login><any>(fairygui.UIPackage.createObject("hall","Login"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_bg = <fairygui.GGraph><any>(this.getChild("bg"));
			this.m_input_bg = <fairygui.GGraph><any>(this.getChild("input_bg"));
			this.m_input_text = <fairygui.GTextInput><any>(this.getChild("input_text"));
			this.m_login_btn = <UI_Click><any>(this.getChild("login_btn"));
			this.m_tips = <fairygui.GTextField><any>(this.getChild("tips"));
		}
	}
}