/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module dacc {

	export class UI_ChangeHeadCom extends fairygui.GComponent {

		public m_bg:fairygui.GGraph;
		public m_list:fairygui.GList;
		public m_close_btn:UI_BtnLong;
		public m_n4:fairygui.GTextField;

		public static URL:string = "ui://sly852qpb78j2m";

		public static createInstance():UI_ChangeHeadCom {
			return <UI_ChangeHeadCom><any>(fairygui.UIPackage.createObject("dacc","ChangeHeadCom"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_bg = <fairygui.GGraph><any>(this.getChild("bg"));
			this.m_list = <fairygui.GList><any>(this.getChild("list"));
			this.m_close_btn = <UI_BtnLong><any>(this.getChild("close_btn"));
			this.m_n4 = <fairygui.GTextField><any>(this.getChild("n4"));
		}
	}
}