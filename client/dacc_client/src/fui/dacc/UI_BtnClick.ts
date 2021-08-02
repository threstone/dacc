/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module dacc {

	export class UI_BtnClick extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_bg:fairygui.GLoader;
		public m_describe:fairygui.GTextField;

		public static URL:string = "ui://sly852qpinlo4";

		public static createInstance():UI_BtnClick {
			return <UI_BtnClick><any>(fairygui.UIPackage.createObject("dacc","BtnClick"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getController("button");
			this.m_bg = <fairygui.GLoader><any>(this.getChild("bg"));
			this.m_describe = <fairygui.GTextField><any>(this.getChild("describe"));
		}
	}
}