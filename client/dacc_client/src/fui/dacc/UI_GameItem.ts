/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module dacc {

	export class UI_GameItem extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n0:fairygui.GGraph;
		public m_n1:fairygui.GGraph;
		public m_n2:fairygui.GGraph;
		public m_title:fairygui.GTextField;
		public m_game_name:fairygui.GTextField;

		public static URL:string = "ui://sly852qpb78j2k";

		public static createInstance():UI_GameItem {
			return <UI_GameItem><any>(fairygui.UIPackage.createObject("dacc","GameItem"));
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
			this.m_game_name = <fairygui.GTextField><any>(this.getChild("game_name"));
		}
	}
}