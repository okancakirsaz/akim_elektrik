import "./reference_element.css";

function ReferenceElement({title,image,description,references}:{title:string,image:string,description:string,references:any[]}){
    return <>
    <div className="referenceElementMain">
        <h3 className="referenceElementTitle">{title}</h3>
        <div className="referenceElementDescription">{description}</div>
        <img className="referenceElementImage" src={image} alt="referans-image"/>
        <div className="referenceElementReferences">{references.join(", ")}</div>
        <div className="referenceElementEditRow">
            <a className="referenceElementEdit" href="/admin-references/add-or-edit">Düzenle</a>
            <div className="referenceElementEdit" id="deleteReferenceElement">Sil</div>
        </div>
    </div>
    </>
}

export default ReferenceElement;