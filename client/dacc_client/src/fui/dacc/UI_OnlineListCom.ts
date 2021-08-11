/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module dacc {

	export class UI_OnlineListCom extends fairygui.GComponent {

		public m_bg:fairygui.GGraph;
		public m_online_list:fairygui.GList;
		public m_title:fairygui.GTextField;

		public static URL:string = "ui://sly852qpggbm2q";

		public static createInstance():UI_OnlineListCom {
			return <UI_OnlineListCom><any>(fairygui.UIPackage.createObject("dacc","OnlineListCom"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_bg = <fairygui.GGraph><any>(this.getChild("bg"));
			this.m_online_list = <fairygui.GList><any>(this.getChild("online_list"));
			this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		}
	}
}