/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module dacc {

	export class UI_GameChoose extends fairygui.GComboBox {

		public m_button:fairygui.Controller;
		public m_n0:fairygui.GGraph;
		public m_n1:fairygui.GGraph;
		public m_n2:fairygui.GGraph;
		public m_title:fairygui.GTextField;

		public static URL:string = "ui://sly852qplzpa2d";

		public static createInstance():UI_GameChoose {
			return <UI_GameChoose><any>(fairygui.UIPackage.createObject("dacc","GameChoose"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getController("button");
			this.m_n0 = <fairygui.GGraph><any>(this.getChild("n0"));
			this.m_n1 = <fairygui.GGraph><any>(this.getChild("n1"));
			this.m_n2 = <fairygui.GGraph><any>(this.getChild("n2"));
			this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		}
	}
}