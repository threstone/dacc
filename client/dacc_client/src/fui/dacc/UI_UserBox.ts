/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module dacc {

	export class UI_UserBox extends fairygui.GComponent {

		public m_user_name:fairygui.GTextField;
		public m_head_pic:fairygui.GLoader;

		public static URL:string = "ui://sly852qpdi7i2o";

		public static createInstance():UI_UserBox {
			return <UI_UserBox><any>(fairygui.UIPackage.createObject("dacc","UserBox"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_user_name = <fairygui.GTextField><any>(this.getChild("user_name"));
			this.m_head_pic = <fairygui.GLoader><any>(this.getChild("head_pic"));
		}
	}
}