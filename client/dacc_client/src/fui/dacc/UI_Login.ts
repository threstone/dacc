/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module dacc {

	export class UI_Login extends fairygui.GComponent {

		public m_account_input_bg:fairygui.GGraph;
		public m_account_input:fairygui.GTextInput;
		public m_password_input_bg:fairygui.GGraph;
		public m_password_input:fairygui.GTextInput;
		public m_login_btn:UI_BtnClick;
		public m_reg_btn:UI_BtnClick;
		public m_acknowledge:fairygui.GTextField;
		public m_reg_com:UI_Register;

		public static URL:string = "ui://sly852qpinlo3";

		public static createInstance():UI_Login {
			return <UI_Login><any>(fairygui.UIPackage.createObject("dacc","Login"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_account_input_bg = <fairygui.GGraph><any>(this.getChild("account_input_bg"));
			this.m_account_input = <fairygui.GTextInput><any>(this.getChild("account_input"));
			this.m_password_input_bg = <fairygui.GGraph><any>(this.getChild("password_input_bg"));
			this.m_password_input = <fairygui.GTextInput><any>(this.getChild("password_input"));
			this.m_login_btn = <UI_BtnClick><any>(this.getChild("login_btn"));
			this.m_reg_btn = <UI_BtnClick><any>(this.getChild("reg_btn"));
			this.m_acknowledge = <fairygui.GTextField><any>(this.getChild("acknowledge"));
			this.m_reg_com = <UI_Register><any>(this.getChild("reg_com"));
		}
	}
}