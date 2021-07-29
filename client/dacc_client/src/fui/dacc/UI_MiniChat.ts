/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module dacc {

	export class UI_MiniChat extends fairygui.GComponent {

		public m_bg:fairygui.GGraph;
		public m_list:fairygui.GList;

		public static URL:string = "ui://sly852qpk72m7";

		public static createInstance():UI_MiniChat {
			return <UI_MiniChat><any>(fairygui.UIPackage.createObject("dacc","MiniChat"));
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