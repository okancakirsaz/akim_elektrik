const logo = new URL( "../../assets/logo.jpeg",import.meta.url).href;

export class AssetConsts{
    public static instance : AssetConsts = new AssetConsts()
    public logo :string = logo;

}