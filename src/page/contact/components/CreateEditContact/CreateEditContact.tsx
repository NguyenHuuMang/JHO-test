import { useState } from "react";
import iconClose from "../../../../assets/images/icon-close.png";
import Button from "../../../../components/button/Button";
import Modal from "../../../../components/modal/Modal";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

type Props = {
  showCreateEdit: boolean;
  handleShowCreateEdit: () => void;
};
const CreateEditContact = ({ showCreateEdit, handleShowCreateEdit }: Props) => {
  const [actionPicker, setActionPicker] = useState<boolean>(false);
  function handleShowActionPicker() {
    setActionPicker(!actionPicker);
  }

  return (
    <Modal
      show={showCreateEdit}
      title="Exporter les résultats"
      onClose={handleShowCreateEdit}
      showTitle={false}
      popupName="popup-exporter"
      specialStyle={true}
    >
      <div className="popup-exporter">
        <div className="header">
          <div className="title">
            <span>Édition des 3 contacts</span>
            <img
              src={iconClose}
              alt="close-icon"
              className="close-icon"
              onClick={handleShowCreateEdit}
            />
          </div>
        </div>
        <div className="body-content">
          <div className="main-body-content">
            <div className="left-card">
              Veuillez sélectionner une action à droite de l'écran.
            </div>
            <div className="right-card">
              <div className="first-item">Actions</div>
              <div className="item-card-right" onClick={handleShowActionPicker}>
                Ajouter à une liste
              </div>
              <div className="item-card-right" onClick={handleShowActionPicker}>
                Se désabonner d’une liste
              </div>
              <div className="item-card-right" onClick={handleShowActionPicker}>
                Ajouter à une automatisation
              </div>
              <div className="item-card-right" onClick={handleShowActionPicker}>
                Supprimer d’une automatisation
              </div>
              <div className="item-card-right" onClick={handleShowActionPicker}>
                Ajouter une étiquette
              </div>
              <div className="item-card-right" onClick={handleShowActionPicker}>
                Supprimer un tag
              </div>
              <div
                className="last-item-card-right"
                onClick={handleShowActionPicker}
              >
                Mettre à jour un tag
              </div>
            </div>
          </div>
          <div className="border-line-item"></div>
          <div className="btn-actions">
            <div className="annuler" onClick={handleShowCreateEdit}>
              Annuler
            </div>
            <Button className="btn-export">Éditer</Button>
          </div>
        </div>
      </div>
      {actionPicker && (
        <div className="popup-action">
          <div className="picker-item">
            Sélectionner
            <FontAwesomeIcon icon={faChevronDown} />
          </div>

          <div className="btn-picker">Ajouter</div>
        </div>
      )}
    </Modal>
  );
};

export default CreateEditContact;
