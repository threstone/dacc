/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module dacc {

	export class UI_OnlineItem extends fairygui.GComponent {

		public m_bg:fairygui.GGraph;
		public m_name:fairygui.GTextField;

		public static URL:string = "ui://sly852qpggbm2r";

		public static createInstance():UI_OnlineItem {
			return <UI_OnlineItem><any>(fairygui.UIPackage.createObject("dacc","OnlineItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_bg = <fairygui.GGraph><any>(this.getChild("bg"));
			this.m_name = <fairygui.GTextField><any>(this.getChild("name"));
		}
	}
}