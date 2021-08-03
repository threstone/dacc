/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game1001 {

	export class UI_Game1001 extends fairygui.GComponent {

		public m_n2:fairygui.GLoader;

		public static URL:string = "ui://rbhwceqzdi7i2";

		public static createInstance():UI_Game1001 {
			return <UI_Game1001><any>(fairygui.UIPackage.createObject("game1001","Game1001"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n2 = <fairygui.GLoader><any>(this.getChild("n2"));
		}
	}
}