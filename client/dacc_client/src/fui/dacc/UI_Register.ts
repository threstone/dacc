/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module dacc {

	export class UI_Register extends fairygui.GComponent {

		public m_bg:fairygui.GGraph;
		public m_account_input_bg:fairygui.GGraph;
		public m_account_input:fairygui.GTextInput;
		public m_password_input_bg:fairygui.GGraph;
		public m_password_input:fairygui.GTextInput;
		public m_password_again_input_bg:fairygui.GGraph;
		public m_password_again_input:fairygui.GTextInput;
		public m_nick_input_bg:fairygui.GGraph;
		public m_nick_input:fairygui.GTextInput;
		public m_reg_btn:UI_BtnClick;
		public m_exit:UI_Btn2;

		public static URL:string = "ui://sly852qpggbm2p";

		public static createInstance():UI_Register {
			return <UI_Register><any>(fairygui.UIPackage.createObject("dacc","Register"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_bg = <fairygui.GGraph><any>(this.getChild("bg"));
			this.m_account_input_bg = <fairygui.GGraph><any>(this.getChild("account_input_bg"));
			this.m_account_input = <fairygui.GTextInput><any>(this.getChild("account_input"));
			this.m_password_input_bg = <fairygui.GGraph><any>(this.getChild("password_input_bg"));
			this.m_password_input = <fairygui.GTextInput><any>(this.getChild("password_input"));
			this.m_password_again_input_bg = <fairygui.GGraph><any>(this.getChild("password_again_input_bg"));
			this.m_password_again_input = <fairygui.GTextInput><any>(this.getChild("password_again_input"));
			this.m_nick_input_bg = <fairygui.GGraph><any>(this.getChild("nick_input_bg"));
			this.m_nick_input = <fairygui.GTextInput><any>(this.getChild("nick_input"));
			this.m_reg_btn = <UI_BtnClick><any>(this.getChild("reg_btn"));
			this.m_exit = <UI_Btn2><any>(this.getChild("exit"));
		}
	}
}