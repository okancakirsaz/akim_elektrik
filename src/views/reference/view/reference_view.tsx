import "../styles/reference_style.css"
import AppBar from "../../../core/widgets/app_bar/app_bar";
import BottomBar from "../../../core/widgets/bottom_bar/bottom_bar";

function ReferenceView(){
    return <>
    <AppBar/>
        <section className="referenceType">
        <h2 className="refTitle">Reference Category</h2>
        <div className="referenceDescription">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </div>
        <img src="https://i.pinimg.com/564x/ac/08/73/ac0873b5009b5b23663d5e5228566903.jpg" alt="refImg" className="refImage" />
            <h3 className="refTitle">Referanslarımız</h3>
            <div className="openedReferenceCorparations">
            <div className="referenceCorpName">Example Corp Name</div>
            <div className="referenceCorpName">Example Corp Name</div>
            <div className="referenceCorpName">Example Corp Name</div>
            <div className="referenceCorpName">Example Corp Name</div>
            <div className="referenceCorpName">Example Corp Name</div>
            <div className="referenceCorpName">Example Corp Name</div>
            <div className="referenceCorpName">Example Corp Name</div>
            <div className="referenceCorpName">Example Corp Name</div>
            <div className="referenceCorpName">Example Corp Name</div>
            <div className="referenceCorpName">Example Corp Name</div>
            <div className="referenceCorpName">Example Corp Name</div>
            <div className="referenceCorpName">Example Corp Name</div>
            </div>
        </section>
    <BottomBar />
    </>
}

export default ReferenceView;

