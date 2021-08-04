/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game1001 {

	export class UI_Game1001 extends fairygui.GComponent {

		public m_bg:fairygui.GLoader;
		public m_player0:fairygui.GComponent;
		public m_player1:fairygui.GComponent;
		public m_read_text1:fairygui.GTextField;
		public m_read_text2:fairygui.GTextField;

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
			this.m_read_text1 = <fairygui.GTextField><any>(this.getChild("read_text1"));
			this.m_read_text2 = <fairygui.GTextField><any>(this.getChild("read_text2"));
		}
	}
}