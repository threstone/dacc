/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module dacc {

	export class UI_AreaSelect extends fairygui.GComponent {

		public m_area5:fairygui.GLoader;
		public m_area4:fairygui.GLoader;
		public m_area3:fairygui.GLoader;
		public m_area2:fairygui.GLoader;
		public m_area1:fairygui.GLoader;
		public m_area0:fairygui.GLoader;

		public static URL:string = "ui://sly852qpikts1r";

		public static createInstance():UI_AreaSelect {
			return <UI_AreaSelect><any>(fairygui.UIPackage.createObject("dacc","AreaSelect"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_area5 = <fairygui.GLoader><any>(this.getChild("area5"));
			this.m_area4 = <fairygui.GLoader><any>(this.getChild("area4"));
			this.m_area3 = <fairygui.GLoader><any>(this.getChild("area3"));
			this.m_area2 = <fairygui.GLoader><any>(this.getChild("area2"));
			this.m_area1 = <fairygui.GLoader><any>(this.getChild("area1"));
			this.m_area0 = <fairygui.GLoader><any>(this.getChild("area0"));
		}
	}
}