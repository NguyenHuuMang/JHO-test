import Button from "../../../../components/button/Button";
import Modal from "../../../../components/modal/Modal";
import "./style.scss";

import BulletedList from "../../../../assets/images/BulletedList.png";
import searchIcon from "../../../../assets/images/Search.png";
import iconPlus from "../../../../assets/images/btn-plus-icon.png";
import trashIcon from "../../../../assets/images/trash-icon.png";
import { useEffect, useState } from "react";
import ListTable from "../../../../components/table/ListTable";

type Props = {
  showCreateEdit: boolean;
  handleShowCreateEditList: () => void;
};

const CreateEditList = ({
  showCreateEdit,
  handleShowCreateEditList,
}: Props) => {
  const [createEdit, setCreateEdit] = useState<boolean>(false);
  const [listData, setListData] = useState<
    { id: string; name: string; contactCount: number }[]
  >([]);
  const [filteredData, setFilteredData] = useState<
    { id: string; name: string; contactCount: number }[]
  >([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [editId, setEditId] = useState<string | null>(null);
  const [inputFields, setInputFields] = useState<string[]>([""]);
  const [focusedInputIndex, setFocusedInputIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    const stored = localStorage.getItem("ajouterListe");
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
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchTerm, listData]);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  function handleCreateEditListContact() {
    setCreateEdit(!createEdit);
    setInputFields([""]);
    setEditId(null);
  }

  function handleShowMoreInput() {
    setInputFields([...inputFields, ""]);
  }

  function handleChangeInput(index: number, value: string) {
    const updatedInputs = [...inputFields];
    updatedInputs[index] = value;
    setInputFields(updatedInputs);
  }

  function handleRemoveInput(index: number) {
    if (inputFields.length === 1) return;

    const updatedInputs = inputFields.filter((_, idx) => idx !== index);
    setInputFields(updatedInputs);
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

  function handleAddOrUpdate() {
    const validInputs = inputFields.filter((input) => input.trim() !== "");

    if (validInputs.length === 0) return;

    let updatedList = [...listData];

    if (editId) {
      updatedList = listData.map((item) =>
        item.id === editId ? { ...item, name: validInputs[0] } : item
      );

      for (let i = 1; i < validInputs.length; i++) {
        updatedList.push({
          id: Date.now().toString() + Math.random().toString() + i,
          name: validInputs[i],
          contactCount: Math.floor(Math.random() * 100) + 1,
        });
      }
    } else {
      for (const input of validInputs) {
        updatedList.push({
          id: Date.now().toString() + Math.random().toString(),
          name: input,
          contactCount: Math.floor(Math.random() * 100) + 1,
        });
      }
    }

    setListData(updatedList);
    setFilteredData(updatedList);
    localStorage.setItem("ajouterListe", JSON.stringify(updatedList));

    setInputFields([""]);
    setEditId(null);
    setCreateEdit(false);
    setSearchTerm("");
  }

  function handleDeleteItem(id: string) {
    const updated = listData.filter((item) => item.id !== id);
    setListData(updated);
    setFilteredData(updated);
    localStorage.setItem("ajouterListe", JSON.stringify(updated));
  }

  function handleEditClick(id: string) {
    const itemToEdit = listData.find((item) => item.id === id);
    if (itemToEdit) {
      setCreateEdit(true);
      setInputFields([itemToEdit.name]);
      setEditId(id);
    }
  }

  return (
    <>
      <Modal
        show={showCreateEdit}
        title="Créer / Editer une Liste"
        onClose={handleShowCreateEditList}
        showTitle={false}
      >
        <div className="create-edit-list-modal">
          <div className="header">
            <div className="title">
              <img
                src={BulletedList}
                alt="BulletedList"
                className="BulletedList"
              />
              <span>Liste de contact</span>
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
                <span>Ajout de contact</span>
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
        <Modal onClose={handleCreateEditListContact} title="" showTitle={false}>
          <div className="create-edit-list-modal">
            <div className="header">
              <div className="title-ajouter">
                <img
                  src={BulletedList}
                  alt="BulletedList"
                  className="BulletedList"
                />
                <span>{editId ? "Modifier liste" : "Ajouter liste"}</span>
              </div>
            </div>
            <div className="body-add">
              <div className="input-wrapper-add">
                {inputFields.map((value, idx) => (
                  <div key={idx} className="input-container">
                    <input
                      type="text"
                      className="input-add"
                      placeholder="Recherche"
                      value={value}
                      onChange={(e) => handleChangeInput(idx, e.target.value)}
                      onFocus={() => handleInputFocus(idx)}
                      onBlur={handleInputBlur}
                    />
                    {focusedInputIndex === idx && inputFields.length > 1 && (
                      <img
                        src={trashIcon}
                        alt="trash-icon"
                        className="trash-icon-inside"
                        onClick={() => handleRemoveInput(idx)}
                      />
                    )}
                  </div>
                ))}
              </div>

              {!editId && (
                <div className="btn-ajouter" onClick={handleShowMoreInput}>
                  <div>Ajouter une liste</div>
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
                  Exportation
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default CreateEditList;
