/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module dacc {

	export class UI_CreateRoom extends fairygui.GComponent {

		public m_bg:fairygui.GGraph;
		public m_game_choose:UI_GameChoose;
		public m_create:UI_CreateBtn;
		public m_input_bg:fairygui.GGraph;
		public m_describe_input:fairygui.GTextInput;

		public static URL:string = "ui://sly852qplzpa27";

		public static createInstance():UI_CreateRoom {
			return <UI_CreateRoom><any>(fairygui.UIPackage.createObject("dacc","CreateRoom"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_bg = <fairygui.GGraph><any>(this.getChild("bg"));
			this.m_game_choose = <UI_GameChoose><any>(this.getChild("game_choose"));
			this.m_create = <UI_CreateBtn><any>(this.getChild("create"));
			this.m_input_bg = <fairygui.GGraph><any>(this.getChild("input_bg"));
			this.m_describe_input = <fairygui.GTextInput><any>(this.getChild("describe_input"));
		}
	}
}