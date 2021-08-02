/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module dacc {

	export class UI_GameList extends fairygui.GComponent {

		public m_bg:fairygui.GGraph;
		public m_list:fairygui.GList;

		public static URL:string = "ui://sly852qplzpa25";

		public static createInstance():UI_GameList {
			return <UI_GameList><any>(fairygui.UIPackage.createObject("dacc","GameList"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_bg = <fairygui.GGraph><any>(this.getChild("bg"));
			this.m_list = <fairygui.GList><any>(this.getChild("list"));
		}
	}
}