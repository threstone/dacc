/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game1001 {

	export class UI_Game1001 extends fairygui.GComponent {

		public m_bg:fairygui.GLoader;
		public m_player0:fairygui.GComponent;
		public m_player1:fairygui.GComponent;
		public m_read_text0:fairygui.GTextField;
		public m_read_text1:fairygui.GTextField;
		public m_ready_btn:fairygui.GButton;
		public m_sword0:fairygui.GLoader;
		public m_sword1:fairygui.GLoader;
		public m_title:fairygui.GTextField;
		public m_room_seq:fairygui.GTextField;
		public m_shitou_btn:fairygui.GButton;
		public m_jiandao_btn:fairygui.GButton;
		public m_bu_btn:fairygui.GButton;
		public m_out_tips0:fairygui.GTextField;
		public m_out_tips1:fairygui.GTextField;
		public m_exit:fairygui.GButton;
		public m_acknowledge:fairygui.GTextField;
		public m_isWatch:fairygui.GTextField;

		public static URL:string = "ui://rbhwceqzdi7i2";

		public static createInstance():UI_Game1001 {
			return <UI_Game1001><any>(fairygui.UIPackage.createObject("game1001","Game1001"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_bg = <fairygui.GLoader><any>(this.getChild("bg"));
			this.m_player0 = <fairygui.GComponent><any>(this.getChild("player0"));
			this.m_player1 = <fairygui.GComponent><any>(this.getChild("player1"));
			this.m_read_text0 = <fairygui.GTextField><any>(this.getChild("read_text0"));
			this.m_read_text1 = <fairygui.GTextField><any>(this.getChild("read_text1"));
			this.m_ready_btn = <fairygui.GButton><any>(this.getChild("ready_btn"));
			this.m_sword0 = <fairygui.GLoader><any>(this.getChild("sword0"));
			this.m_sword1 = <fairygui.GLoader><any>(this.getChild("sword1"));
			this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
			this.m_room_seq = <fairygui.GTextField><any>(this.getChild("room_seq"));
			this.m_shitou_btn = <fairygui.GButton><any>(this.getChild("shitou_btn"));
			this.m_jiandao_btn = <fairygui.GButton><any>(this.getChild("jiandao_btn"));
			this.m_bu_btn = <fairygui.GButton><any>(this.getChild("bu_btn"));
			this.m_out_tips0 = <fairygui.GTextField><any>(this.getChild("out_tips0"));
			this.m_out_tips1 = <fairygui.GTextField><any>(this.getChild("out_tips1"));
			this.m_exit = <fairygui.GButton><any>(this.getChild("exit"));
			this.m_acknowledge = <fairygui.GTextField><any>(this.getChild("acknowledge"));
			this.m_isWatch = <fairygui.GTextField><any>(this.getChild("isWatch"));
		}
	}
}