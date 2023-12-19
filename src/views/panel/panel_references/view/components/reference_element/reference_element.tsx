import React from "react";
import { PanelReferencesViewModel } from "../../../viewmodel/panel_references_viewmodel";
import "./reference_element.css";
import { Dialog } from "@mui/material";
import AddReference from "../add_reference/add_reference";

function ReferenceElement({
  title,
  image,
  description,
  references,
  referencesList,
  id
}: {
  title: string;
  image: string;
  description: string;
  references: string;
  referencesList:string[],
  id:string
}) {
  const [open, setOpen] = React.useState(false);

  const openDialog = () => {
    setOpen(true);
  };
  const closeDialog = () => {
    setOpen(false);
  };
  const viewModel: PanelReferencesViewModel = PanelReferencesViewModel.instance;
  return (
    <>
      <React.Fragment>
        <Dialog
          PaperProps={{
            style: {
              backgroundColor: "transparent",
              boxShadow: "none",
            },
          }}
          open={open}
          onClose={closeDialog}
        >
          <AddReference title={title} description={description} references={referencesList} imgPaths={image} id={id}/>
          <h3
            onClick={() => closeDialog()}
            style={{ textAlign: "center", cursor: "pointer" }}
          >
            Kapat
          </h3>
        </Dialog>
      </React.Fragment>
      <div className="referenceElementMain">
        <h3 className="referenceElementTitle">{title}</h3>
        <div className="referenceElementDescription">{description}</div>
        <img
          className="referenceElementImage"
          src={image}
          alt="referans-image"
        />
        <div className="referenceElementReferences">
          {references}
        </div>
        <div className="referenceElementEditRow">
          <div
            className="referenceElementEdit"
            onClick={() => {
              openDialog();
            }}
          >
            Düzenle
          </div>
          <div
            className="referenceElementEdit"
            id="deleteReferenceElement"
            onClick={async () => await viewModel.removeRefCard(id)}
          >
            Sil
          </div>
        </div>
      </div>
    </>
  );
}

export default ReferenceElement;
