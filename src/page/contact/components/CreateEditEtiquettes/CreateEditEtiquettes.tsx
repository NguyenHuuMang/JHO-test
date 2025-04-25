import Modal from "../../../../components/modal/Modal";
import "./style.scss";
import Button from "../../../../components/button/Button";
import trashIcon from "../../../../assets/images/trash-icon.png";

import etiquette from "../../../../assets/images/etiquette.png";
import searchIcon from "../../../../assets/images/Search.png";
import iconPlus from "../../../../assets/images/btn-plus-icon.png";
import ListTable from "../../../../components/table/ListTable";
import { useEffect, useState, useRef } from "react";

type Props = {
  showCreateEditEtiquettes: boolean;
  handleShowCreateEditEtiquettes: () => void;
};

interface EtiquetteItem {
  id: string;
  etiquette: string;
  color: string;
  contactCount: number;
}

const CreateEditEtiquettes = ({
  showCreateEditEtiquettes,
  handleShowCreateEditEtiquettes,
}: Props) => {
  const [createEdit, setCreateEdit] = useState<boolean>(false);
  const [listData, setListData] = useState<EtiquetteItem[]>([]);
  const [filteredData, setFilteredData] = useState<EtiquetteItem[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [editId, setEditId] = useState<string | null>(null);
  const [inputFields, setInputFields] = useState<string[]>([""]);
  const [selectedColors, setSelectedColors] = useState<string[]>(["FF001F"]);
  const [focusedInputIndex, setFocusedInputIndex] = useState<number | null>(
    null
  );
  const [showColorPicker, setShowColorPicker] = useState<number | null>(null);

  const colorPickerRef = useRef<HTMLDivElement>(null);

  const colors = [
    "FF001F",
    "FF374F",
    "FF8C9A",
    "AF2132",
    "6F1D27",
    "4E0911",
    "0038FF",
    "4F76FF",
    "A5B9FF",
    "3656C8",
    "253777",
    "0D1C51",
    "8AD74E",
    "B4F382",
    "C6FC9B",
    "68A836",
    "59952A",
    "396D10",
    "FFE500",
    "F6D940",
    "A79814",
    "FF7A00",
    "FFA800",
    "A56932",
  ];

  useEffect(() => {
    const stored = localStorage.getItem("ajouterEtiquette");
    if (stored) {
      const parsedData = JSON.parse(stored);
      setListData(parsedData);
      setFilteredData(parsedData);
    }
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredData(listData);
    } else {
      const filtered = listData.filter((item) =>
        item.etiquette.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchTerm, listData]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target as Node)
      ) {
        setShowColorPicker(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  function handleCreateEditListContact() {
    setCreateEdit(!createEdit);
    setInputFields([""]);
    setSelectedColors(["FF001F"]);
    setEditId(null);
  }

  function handleShowMoreInput() {
    setInputFields([...inputFields, ""]);
    setSelectedColors([...selectedColors, "FF001F"]);
  }

  function handleChangeInput(index: number, value: string) {
    const updatedInputs = [...inputFields];
    updatedInputs[index] = value;
    setInputFields(updatedInputs);
  }

  function handleRemoveInput(index: number) {
    if (inputFields.length === 1) return;

    const updatedInputs = inputFields.filter((_, idx) => idx !== index);
    const updatedColors = selectedColors.filter((_, idx) => idx !== index);

    setInputFields(updatedInputs);
    setSelectedColors(updatedColors);
    setFocusedInputIndex(null);
  }

  function handleInputFocus(index: number) {
    setFocusedInputIndex(index);
  }

  function handleInputBlur() {
    setTimeout(() => {
      setFocusedInputIndex(null);
    }, 200);
  }

  function toggleColorPicker(index: number) {
    setShowColorPicker(showColorPicker === index ? null : index);
  }

  function selectColor(index: number, color: string) {
    const updatedColors = [...selectedColors];
    updatedColors[index] = color;
    setSelectedColors(updatedColors);
    setShowColorPicker(null);
  }

  function handleAddOrUpdate() {
    const validInputs = inputFields.filter((input) => input.trim() !== "");

    if (validInputs.length === 0) return;

    let updatedList = [...listData];

    if (editId) {
      const editIndex = listData.findIndex((item) => item.id === editId);

      if (editIndex !== -1) {
        updatedList[editIndex] = {
          ...updatedList[editIndex],
          etiquette: validInputs[0],
          color: `color-${selectedColors[0]}`,
        };
      }

      for (let i = 1; i < validInputs.length; i++) {
        updatedList.push({
          id: Date.now().toString() + Math.random().toString() + i,
          etiquette: validInputs[i],
          color: `color-${selectedColors[i]}`,
          contactCount: Math.floor(Math.random() * 100) + 1,
        });
      }
    } else {
      for (let i = 0; i < validInputs.length; i++) {
        updatedList.push({
          id: Date.now().toString() + Math.random().toString(),
          etiquette: validInputs[i],
          color: `color-${selectedColors[i]}`,
          contactCount: Math.floor(Math.random() * 100) + 1,
        });
      }
    }

    setListData(updatedList);
    setFilteredData(updatedList);
    localStorage.setItem("ajouterEtiquette", JSON.stringify(updatedList));

    setInputFields([""]);
    setSelectedColors(["FF001F"]);
    setEditId(null);
    setCreateEdit(false);
    setSearchTerm("");
  }

  function handleDeleteItem(id: string) {
    const updated = listData.filter((item) => item.id !== id);
    setListData(updated);
    setFilteredData(updated);
    localStorage.setItem("ajouterEtiquette", JSON.stringify(updated));
  }

  function handleEditClick(id: string) {
    const itemToEdit = listData.find((item) => item.id === id);
    if (itemToEdit) {
      setCreateEdit(true);
      setInputFields([itemToEdit.etiquette]);

      const colorCode = itemToEdit.color.replace("color-", "");
      setSelectedColors([colorCode]);

      setEditId(id);
    }
  }

  return (
    <>
      <Modal
        show={showCreateEditEtiquettes}
        title="Créer / Editer une Liste"
        onClose={handleShowCreateEditEtiquettes}
        showTitle={false}
      >
        <div className="create-edit-list-modal">
          <div className="header">
            <div className="title">
              <img
                src={etiquette}
                alt="BulletedList"
                className="BulletedList"
              />
              <span>Étiquettes</span>
            </div>
            <div className="row-btn">
              <div className="input-wrapper">
                <img
                  src={searchIcon}
                  alt="search-icon"
                  className="search-icon"
                />
                <input
                  type="text"
                  className="input-search"
                  placeholder="Recherche"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
              <Button className="btn-add" onClick={handleCreateEditListContact}>
                <img src={iconPlus} alt="icon-plus" />
                <span>Ajouter une étiquette</span>
              </Button>
            </div>
          </div>
          <div className="body">
            <ListTable
              data={filteredData}
              onEdit={(id) => handleEditClick(id)}
              onDelete={(id) => handleDeleteItem(id)}
            />
          </div>
        </div>
      </Modal>

      {createEdit && (
        <Modal
          onClose={handleCreateEditListContact}
          title=""
          showTitle={false}
          className="dark-mode-modal"
        >
          <div className="create-edit-list-modal">
            <div className="header">
              <div className="title-ajouter">
                <img
                  src={etiquette}
                  alt="BulletedList"
                  className="BulletedList"
                />
                <span>
                  {editId ? "Modifier étiquette" : "Ajouter étiquette"}
                </span>
              </div>
            </div>
            <div className="body-add">
              <div className="input-wrapper-add">
                {inputFields.map((value, idx) => (
                  <div key={idx} className="etiquette-input-container">
                    <div
                      className="color-badge"
                      onClick={() => toggleColorPicker(idx)}
                      style={{ backgroundColor: `#${selectedColors[idx]}` }}
                    ></div>
                    <input
                      type="text"
                      className="etiquette-input"
                      placeholder="Votre étiquette"
                      value={value}
                      onChange={(e) => handleChangeInput(idx, e.target.value)}
                      onFocus={() => handleInputFocus(idx)}
                      onBlur={handleInputBlur}
                    />
                    {focusedInputIndex === idx && inputFields.length > 1 && (
                      <div className="trash-icon-container">
                        <img
                          src={trashIcon}
                          alt="trash-icon"
                          className="trash-icon-inside"
                          onClick={() => handleRemoveInput(idx)}
                        />
                      </div>
                    )}

                    {showColorPicker === idx && (
                      <div className="color-picker-panel" ref={colorPickerRef}>
                        <div className="color-grid">
                          {colors.map((color, colorIdx) => (
                            <div
                              key={colorIdx}
                              className="color-option"
                              style={{ backgroundColor: `#${color}` }}
                              onClick={() => selectColor(idx, color)}
                            ></div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {!editId && (
                <div className="btn-ajouter" onClick={handleShowMoreInput}>
                  <div>Ajouter une étiquette</div>
                  <img src={iconPlus} alt="icon-plus" />
                </div>
              )}

              <div
                className="border-line-item"
                style={{ marginTop: editId ? "24px" : "0px" }}
              ></div>

              <div className="btn-actions">
                <div className="annuler" onClick={handleCreateEditListContact}>
                  Annuler
                </div>
                <Button className="btn-export" onClick={handleAddOrUpdate}>
                  Sauvegarder
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default CreateEditEtiquettes;
