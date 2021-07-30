/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module dacc {

	export class UI_Chat extends fairygui.GComponent {

		public m_bg:fairygui.GImage;
		public m_clickLoader:fairygui.GLoader;
		public m_list:fairygui.GList;
		public m_inputBg:fairygui.GImage;
		public m_selectArea:fairygui.GLoader;
		public m_areaSelectBar:UI_AreaSelect;
		public m_inputText:fairygui.GTextInput;
		public m_send:UI_Btn2;
		public m_suodingdibu:UI_BtnLong;
		public m_tuodong:UI_BtnLong;
		public m_dragForSize:fairygui.GLoader;

		public static URL:string = "ui://sly852qpiktsa";

		public static createInstance():UI_Chat {
			return <UI_Chat><any>(fairygui.UIPackage.createObject("dacc","Chat"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_bg = <fairygui.GImage><any>(this.getChild("bg"));
			this.m_clickLoader = <fairygui.GLoader><any>(this.getChild("clickLoader"));
			this.m_list = <fairygui.GList><any>(this.getChild("list"));
			this.m_inputBg = <fairygui.GImage><any>(this.getChild("inputBg"));
			this.m_selectArea = <fairygui.GLoader><any>(this.getChild("selectArea"));
			this.m_areaSelectBar = <UI_AreaSelect><any>(this.getChild("areaSelectBar"));
			this.m_inputText = <fairygui.GTextInput><any>(this.getChild("inputText"));
			this.m_send = <UI_Btn2><any>(this.getChild("send"));
			this.m_suodingdibu = <UI_BtnLong><any>(this.getChild("suodingdibu"));
			this.m_tuodong = <UI_BtnLong><any>(this.getChild("tuodong"));
			this.m_dragForSize = <fairygui.GLoader><any>(this.getChild("dragForSize"));
		}
	}
}