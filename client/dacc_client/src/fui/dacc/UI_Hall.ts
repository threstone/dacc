/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module dacc {

	export class UI_Hall extends fairygui.GComponent {

		public m_bg:fairygui.GLoader;
		public m_chat_com:UI_Chat;
		public m_user_name:fairygui.GTextField;
		public m_game_btn:UI_BtnClick;
		public m_create_room_btn:UI_BtnClick;
		public m_room_btn:UI_BtnClick;
		public m_game_list:UI_GameList;
		public m_create_room:UI_CreateRoom;
		public m_room_list:UI_RoomList;

		public static URL:string = "ui://sly852qpi7mx0";

		public static createInstance():UI_Hall {
			return <UI_Hall><any>(fairygui.UIPackage.createObject("dacc","Hall"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_bg = <fairygui.GLoader><any>(this.getChild("bg"));
			this.m_chat_com = <UI_Chat><any>(this.getChild("chat_com"));
			this.m_user_name = <fairygui.GTextField><any>(this.getChild("user_name"));
			this.m_game_btn = <UI_BtnClick><any>(this.getChild("game_btn"));
			this.m_create_room_btn = <UI_BtnClick><any>(this.getChild("create_room_btn"));
			this.m_room_btn = <UI_BtnClick><any>(this.getChild("room_btn"));
			this.m_game_list = <UI_GameList><any>(this.getChild("game_list"));
			this.m_create_room = <UI_CreateRoom><any>(this.getChild("create_room"));
			this.m_room_list = <UI_RoomList><any>(this.getChild("room_list"));
		}
	}
}