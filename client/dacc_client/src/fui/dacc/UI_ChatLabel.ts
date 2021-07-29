/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module dacc {

	export class UI_ChatLabel extends fairygui.GLabel {

		public m_title:fairygui.GTextField;

		public static URL:string = "ui://sly852qpk72m9";

		public static createInstance():UI_ChatLabel {
			return <UI_ChatLabel><any>(fairygui.UIPackage.createObject("dacc","ChatLabel"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		}
	}
}