import { AssetConsts } from "../../../../../../core/consts/asset_consts";
import CustomButton from "../../../../../../core/widgets/custom_button/custom_button";
import TextAreaInput from "../../../../../../core/widgets/text_area_input/text_area_input";
import TextInput from "../../../../../../core/widgets/text_input/text_input";
import "./add_reference.css"


function AddReference(){
    return <>
    <section id="addReferenceContainer">

    <div id="addedReferencesContainer">
        <TextInput controllerId="referenceName" title="Referans Adı" type="text"/>
        <div style={{height:"10px"}}></div>
        <CustomButton text="Ekle" onClick={()=>{}} />
        <div style={{height:"10px"}}></div>
        <div id="addedReferences">
           <div className="addedReference">Example Reference <img id="deleteRef" src={AssetConsts.instance.remove}/></div>
        </div>
        <div className="sizedBox"></div>
        </div>

        <div id="inputsAddReference">
        <TextInput controllerId="referenceTitle" title="Başlık Giriniz" type="text"/>
        <div className="sizedBox"></div>
        <TextAreaInput controllerId="referenceDescription" title="Açıklama Giriniz" />
        <div className="sizedBox"></div>
        <div id="addPhotoRow">
            <CustomButton text="Fotoğraf Ekle" onClick={()=>{}} />
            <img id="addedImageInRefs" src="https://i.pinimg.com/564x/6b/e5/84/6be5845e3c3c9f7a11f41d7c57cbbc23.jpg" alt="added_reference_image"/>
        </div>
        <div className="sizedBox"></div>
        <div style={{width:"250px", display:"flex",justifyContent:"center"}}><CustomButton text="Onayla" onClick={()=>{}} /></div>
        <div className="sizedBox"></div>
        </div>
    </section>
    </>
}

export default AddReference;