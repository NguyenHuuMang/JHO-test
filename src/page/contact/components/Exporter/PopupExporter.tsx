import Modal from "../../../../components/modal/Modal";
import Button from "../../../../components/button/Button";
import Input from "../../../../components/input/Input";
import iconClose from "../../../../assets/images/icon-close.png";

import "./style.scss";
import RadioGroup from "./RadioGroup";
type Props = {
  showExporter: boolean;
  handleShowExporter: () => void;
};

const PopupExporter = ({ showExporter, handleShowExporter }: Props) => {
  return (
    <Modal
      show={showExporter}
      title="Exporter les résultats"
      onClose={handleShowExporter}
      showTitle={false}
      popupName="popup-exporter"
    >
      <div className="popup-exporter">
        <div className="header">
          <div className="title">
            <span>Exporter les résultats</span>
            <img
              src={iconClose}
              alt="close-icon"
              className="close-icon"
              onClick={handleShowExporter}
            />
          </div>
          <div className="choice-format">
            <div className="title">Choisir un format pour l’exportation</div>
            <div className="item-title">
              <div className="item-text">
                <label className="custom-radio">
                  <input type="radio" name="format" />
                  <span className="radio-mark"></span>
                  <div>XLSX (Excel)</div>
                </label>
              </div>
              <div className="item-text">
                <label className="custom-radio">
                  <input type="radio" name="format" />
                  <span className="radio-mark"></span>
                  <div>CSV (valeurs séparées par des virgules)</div>
                </label>
              </div>
            </div>
            <div className="tous-les">
              Tous les 88 éléments seront exportés.
            </div>
            <div className="border-line-item"></div>
            <div className="title-second">
              Nom de l’exportation (facultatif)
            </div>
            <Input
              type="text"
              className="input-name-exporter"
              placeholder="Nom de l’exportation (il s’agit du nom du fichier exporté)"
            />
            <div className="selectionnez-form">
              <span>Sélectionnez les fichiers à exporter</span>
              <RadioGroup />
            </div>
            <div className="border-line-item"></div>
            <div className="btn-actions">
              <div className="annuler" onClick={handleShowExporter}>
                Annuler
              </div>
              <Button className="btn-export">Exportation</Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PopupExporter;
