/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module dacc {

	export class UI_GameChooseItem extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n0:fairygui.GGraph;
		public m_n1:fairygui.GGraph;
		public m_title:fairygui.GTextField;

		public static URL:string = "ui://sly852qplzpa2b";

		public static createInstance():UI_GameChooseItem {
			return <UI_GameChooseItem><any>(fairygui.UIPackage.createObject("dacc","GameChooseItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getController("button");
			this.m_n0 = <fairygui.GGraph><any>(this.getChild("n0"));
			this.m_n1 = <fairygui.GGraph><any>(this.getChild("n1"));
			this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		}
	}
}