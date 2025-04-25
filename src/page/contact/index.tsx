import React, { useState } from "react";
import Button from "../../components/button/Button";
import ContactTab from "./components/ContactTab";

import "./style.scss";

import iconMenuContact from "../../assets/images/menu-contact.png";
import iconMenuContactNonActive from "../../assets/images/contact-nonactive.png";
import iconMenuTag from "../../assets/images/menu-tag.png";
import iconMenuTagActive from "../../assets/images/etiquette.png";
import iconMenuEuro from "../../assets/images/menu-euro.png";
import iconMenuEuroActive from "../../assets/images/euroActive.png";
import iconMenuTask from "../../assets/images/menu-task.png";
import iconMenuTaskActive from "../../assets/images/taskActive.png";
import iconPlus from "../../assets/images/btn-plus-icon.png";
import preferencesIcon from "../../assets/images/preferences.png";
import userIcon from "../../assets/images/nav-user.png";
import searchIcon from "../../assets/images/Search.png";
import arrowDown from "../../assets/images/arrowDown.png";
import contactSetting from "../../assets/images/contactSetting.png";
import Modal from "../../components/modal/Modal";
import CreateEditList from "./components/CreateEditList/CreateEditList";
import CreateEditEtiquettes from "./components/CreateEditEtiquettes/CreateEditEtiquettes";
import PopupExporter from "./components/Exporter/PopupExporter";

const Contact = () => {
  const [activeTab, setActiveTab] = useState<
    "Contact" | "Étiquettes" | "Opportunités" | "Tâches"
  >("Contact");
  const [showSetting, setShowSetting] = useState<boolean>(false);
  const [showCreateEdit, setShowCreateEdit] = useState<boolean>(false);
  const [showCreateEditEtiquette, setShowCreateEditEtiquette] =
    useState<boolean>(false);

  const [showExporter, setShowExporter] = useState<boolean>(false);

  function handleShowSetting() {
    setShowSetting(!showSetting);
  }

  function handleShowCreateEditList() {
    setShowCreateEdit(!showCreateEdit);
  }

  function handleShowCreateEditEtiquette() {
    setShowCreateEditEtiquette(!showCreateEditEtiquette);
  }

  function handleShowExporter() {
    setShowExporter(!showExporter);
  }

  return (
    <div className="contact-page">
      <div className="menu-contact">
        <div className="items-menu ">
          <div
            className={`items ${activeTab === "Contact" ? "active" : ""}`}
            onClick={() => setActiveTab("Contact")}
          >
            <img
              src={
                activeTab === "Contact"
                  ? iconMenuContact
                  : iconMenuContactNonActive
              }
              alt={
                activeTab === "Contact"
                  ? "iconMenuContact"
                  : "iconMenuContactNonActive"
              }
            />
            <div className="text">Contacts</div>
          </div>
          <div
            className={`items ${activeTab === "Étiquettes" ? "active" : ""}`}
            onClick={() => setActiveTab("Étiquettes")}
          >
            <img
              src={activeTab === "Étiquettes" ? iconMenuTagActive : iconMenuTag}
              alt="iconMenuTag"
            />
            <div className="text">Étiquettes</div>
          </div>
          <div
            className={`items ${activeTab === "Opportunités" ? "active" : ""}`}
            onClick={() => setActiveTab("Opportunités")}
          >
            <img
              src={
                activeTab === "Opportunités" ? iconMenuEuroActive : iconMenuEuro
              }
              alt="iconMenuEuro"
            />
            <div className="text">Opportunités</div>
          </div>
          <div
            className={`items ${activeTab === "Tâches" ? "active" : ""}`}
            onClick={() => setActiveTab("Tâches")}
          >
            <img
              src={activeTab === "Tâches" ? iconMenuTaskActive : iconMenuTask}
              alt="iconMenuTask"
            />
            <div className="text">Tâches</div>
          </div>
        </div>
      </div>
      <div className="content-contact">
        <div className="header-contact-page">
          <div className="btn-add-contact">
            <Button className="btn-add">
              <img src={iconPlus} alt="icon-plus" />
              <span>Ajout de contact</span>
            </Button>
            <span className="total-contact">100 Contacts</span>
          </div>
          <div className="more-actions">
            <div className="plus-de-filtre">
              <div className="filter">
                <img src={preferencesIcon} alt="preferencesIcon" />
                <span>Plus de filtre</span>
              </div>
              <img src={arrowDown} alt="arrowDown" />
            </div>
            <div className="plus-de-filtre">
              <div className="filter">
                <img src={userIcon} alt="preferencesIcon" />
                <span>Tout le monde</span>
              </div>
              <img src={arrowDown} alt="arrowDown" />
            </div>
            <div className="plus-de-filtre">
              <div className="filter">
                <img src={searchIcon} alt="preferencesIcon" />
                <span>Titre, contact, responsable...</span>
              </div>
              <img src={arrowDown} alt="arrowDown" />
            </div>
            <div className="plus-de-settings" onClick={handleShowSetting}>
              <img src={contactSetting} alt="arrowDown" />
            </div>
            {showSetting && (
              <div className="popup-setting">
                <span className="item-popup" onClick={handleShowCreateEditList}>
                  Créer / Editer une Liste
                </span>
                <span
                  className="item-popup"
                  onClick={handleShowCreateEditEtiquette}
                >
                  Créer / Editer une Etiquette
                </span>
                <span className="item-popup" onClick={handleShowExporter}>
                  Exporter les résultats du filtre...
                </span>
                <span className="item-popup">Importer des données</span>
              </div>
            )}
          </div>
        </div>
        {activeTab === "Contact" && <ContactTab className="contact-tab" />}
      </div>

      {showCreateEdit && (
        <CreateEditList
          showCreateEdit={showCreateEdit}
          handleShowCreateEditList={handleShowCreateEditList}
        />
      )}
      {showCreateEditEtiquette && (
        <CreateEditEtiquettes
          showCreateEditEtiquettes={showCreateEditEtiquette}
          handleShowCreateEditEtiquettes={handleShowCreateEditEtiquette}
        />
      )}
      {showExporter && (
        <PopupExporter
          showExporter={showExporter}
          handleShowExporter={handleShowExporter}
        />
      )}
    </div>
  );
};

export default Contact;
