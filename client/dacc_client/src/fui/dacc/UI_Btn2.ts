/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module dacc {

	export class UI_Btn2 extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n0:fairygui.GImage;
		public m_n1:fairygui.GImage;
		public m_n2:fairygui.GImage;
		public m_describe:fairygui.GTextField;

		public static URL:string = "ui://sly852qpikts1x";

		public static createInstance():UI_Btn2 {
			return <UI_Btn2><any>(fairygui.UIPackage.createObject("dacc","Btn2"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getController("button");
			this.m_n0 = <fairygui.GImage><any>(this.getChild("n0"));
			this.m_n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.m_n2 = <fairygui.GImage><any>(this.getChild("n2"));
			this.m_describe = <fairygui.GTextField><any>(this.getChild("describe"));
		}
	}
}