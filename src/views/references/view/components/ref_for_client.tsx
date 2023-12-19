import "../../styles/references_style.css";
import { ReferencesViewModel } from '../../viewmodel/references_viewmodel';

function RefForClient({title,image,description}:{title:string,image:string,description:string}){
    return <>
      <section className="referenceType">
        <h2 className="refTitle">{title}</h2>
        <div className="referenceDescription">
            {description}
        </div>
        <img src={image} alt="refImg" className="refImage" />
            <h3 className="refTitle">Referanslarımız</h3>
            <div className="referenceCorporations">
           { ReferencesViewModel.instance.fetchRefs(title)}
            </div>
        </section>
        
    </>
}

export default RefForClient;