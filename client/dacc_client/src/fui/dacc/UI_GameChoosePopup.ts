/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module dacc {

	export class UI_GameChoosePopup extends fairygui.GComponent {

		public m_n0:fairygui.GGraph;
		public m_list:fairygui.GList;

		public static URL:string = "ui://sly852qplzpa2c";

		public static createInstance():UI_GameChoosePopup {
			return <UI_GameChoosePopup><any>(fairygui.UIPackage.createObject("dacc","GameChoosePopup"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GGraph><any>(this.getChild("n0"));
			this.m_list = <fairygui.GList><any>(this.getChild("list"));
		}
	}
}