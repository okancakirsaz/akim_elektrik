import { Link } from "react-router-dom";
import "./app_bar.css";

function LinkElement({path,text}:{path:string,text:string}){

    return <>
            <div className="appBarLinkDrawer">
                <Link to={"/"+path} className="appBarLinkElement">
                    {text}
                </Link>
                <div className="divider"></div>
            </div>
    </>
}

export default LinkElement;