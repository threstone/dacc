/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module dacc {

	export class UI_RoomItem extends fairygui.GComponent {

		public m_bg:fairygui.GGraph;
		public m_title:fairygui.GTextField;
		public m_n3:UI_BtnLong;
		public m_title_2:fairygui.GTextField;

		public static URL:string = "ui://sly852qpb78j2h";

		public static createInstance():UI_RoomItem {
			return <UI_RoomItem><any>(fairygui.UIPackage.createObject("dacc","RoomItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_bg = <fairygui.GGraph><any>(this.getChild("bg"));
			this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
			this.m_n3 = <UI_BtnLong><any>(this.getChild("n3"));
			this.m_title_2 = <fairygui.GTextField><any>(this.getChild("title"));
		}
	}
}