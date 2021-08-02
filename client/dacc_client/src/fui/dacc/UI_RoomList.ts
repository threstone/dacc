/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module dacc {

	export class UI_RoomList extends fairygui.GComponent {

		public m_bg:fairygui.GGraph;
		public m_list:fairygui.GList;
		public m_title:fairygui.GTextField;
		public m_title_2:fairygui.GTextField;
		public m_game_choose:UI_GameChoose;
		public m_status_choose:UI_GameChoose;

		public static URL:string = "ui://sly852qpb78j2g";

		public static createInstance():UI_RoomList {
			return <UI_RoomList><any>(fairygui.UIPackage.createObject("dacc","RoomList"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_bg = <fairygui.GGraph><any>(this.getChild("bg"));
			this.m_list = <fairygui.GList><any>(this.getChild("list"));
			this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
			this.m_title_2 = <fairygui.GTextField><any>(this.getChild("title"));
			this.m_game_choose = <UI_GameChoose><any>(this.getChild("game_choose"));
			this.m_status_choose = <UI_GameChoose><any>(this.getChild("status_choose"));
		}
	}
}