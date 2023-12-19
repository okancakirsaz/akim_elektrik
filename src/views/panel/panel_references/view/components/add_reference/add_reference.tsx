import { useEffect } from "react";
import CustomButton from "../../../../../../core/widgets/custom_button/custom_button";
import TextAreaInput from "../../../../../../core/widgets/text_area_input/text_area_input";
import TextInput from "../../../../../../core/widgets/text_input/text_input";
import { PanelReferencesViewModel } from "../../../viewmodel/panel_references_viewmodel";
import "./add_reference.css";

function AddReference({
  title,
  description,
  imgPaths,
  references,
  id
}: {
  title?: string;
  description?: string;
  imgPaths?: string;
  references?: string[];
  id?:string;
}) {
  const viewModel: PanelReferencesViewModel = PanelReferencesViewModel.instance;

  useEffect(() => {
    viewModel.fetchComedReferences(references);
  });
  return (
    <>
      <section id="addReferenceContainer">
        <div id="addedReferencesContainer">
          <TextInput
            controllerId="referenceName"
            title="Referans Adı"
            type="text"
          />
          <div style={{ height: "10px" }}></div>
          <CustomButton
            text="Ekle"
            onClick={() => {
              viewModel.addReference();
            }}
          />
          <div style={{ height: "10px" }}></div>
          <div id="addedReferences"></div>
          <div className="sizedBox"></div>
        </div>

        <div id="inputsAddReference">
          <TextInput
            value={title}
            controllerId="referenceTitle"
            title="Başlık Giriniz"
            type="text"
          />
          <div className="sizedBox"></div>
          <TextAreaInput
            value={description}
            controllerId="referenceDescription"
            title="Açıklama Giriniz"
          />
          <div className="sizedBox"></div>
          <div id="addPhotoRow">
            <input type="file" id="fileInput" style={{ display: "none" }} />
            <CustomButton
              text="Fotoğraf Ekle"
              onClick={() => viewModel.openFileSelector()}
            />
            <img
              id="addedImageInRefs"
              src={
                imgPaths ??
                "https://upload.wikimedia.org/wikipedia/commons/2/2d/Your_photo_here.jpg"
              }
              alt="added_reference_image"
            />
          </div>
          <div className="sizedBox"></div>
          <div
            style={{
              width: "250px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CustomButton
              text="Onayla"
              onClick={async () => {
                if (title == null) {
                  await viewModel.saveReference();
                } else {
                  await viewModel.updateReference(id!);
                }
              }}
            />
          </div>
          <div className="sizedBox"></div>
        </div>
      </section>
    </>
  );
}

export default AddReference;
