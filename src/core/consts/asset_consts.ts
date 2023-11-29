const logo = new URL( "../../assets/logo.jpeg",import.meta.url).href;
const menu = new URL( "../../assets/menu.svg",import.meta.url).href;
const phone = new URL( "../../assets/phone.svg",import.meta.url).href;
const i1 = new URL( "../../assets/1.png",import.meta.url).href;
const i2 = new URL( "../../assets/2.png",import.meta.url).href;
const i3 = new URL( "../../assets/3.png",import.meta.url).href;
const i4 = new URL( "../../assets/4.png",import.meta.url).href;
const board = new URL( "../../assets/board.jpeg",import.meta.url).href;

export class AssetConsts{
    public static instance : AssetConsts = new AssetConsts()
    public logo :string = logo;
    public menu :string = menu;
    public i1 :string = i1;
    public i2 :string = i2;
    public i3 :string = i3;
    public i4 :string = i4;
    public board :string = board;
    public phone :string = phone;

}