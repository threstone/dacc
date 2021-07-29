/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module hall {

	export class UI_Click extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n0:fairygui.GGraph;
		public m_n1:fairygui.GGraph;
		public m_n2:fairygui.GGraph;
		public m_n3:fairygui.GTextField;

		public static URL:string = "ui://sly852qpinlo4";

		public static createInstance():UI_Click {
			return <UI_Click><any>(fairygui.UIPackage.createObject("hall","Click"));
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
			this.m_n3 = <fairygui.GTextField><any>(this.getChild("n3"));
		}
	}
}