/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module dacc {

	export class UI_RoomItem extends fairygui.GComponent {

		public m_bg:fairygui.GGraph;
		public m_game_name:fairygui.GTextField;
		public m_join_btn:UI_BtnLong;
		public m_game_status:fairygui.GTextField;
		public m_describe:fairygui.GTextField;

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
			this.m_game_name = <fairygui.GTextField><any>(this.getChild("game_name"));
			this.m_join_btn = <UI_BtnLong><any>(this.getChild("join_btn"));
			this.m_game_status = <fairygui.GTextField><any>(this.getChild("game_status"));
			this.m_describe = <fairygui.GTextField><any>(this.getChild("describe"));
		}
	}
}