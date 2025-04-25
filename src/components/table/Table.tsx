import React, { Dispatch, useEffect, useState } from "react";
import { Trash2, Edit, Settings } from "lucide-react";
import "./style.scss";

import trashIcon from "../../assets/images/trash-icon.png";
import emailIcon from "../../assets/images/email-icon.png";
import phoneIcon from "../../assets/images/phone-icon.png";
import editIcon from "../../assets/images/edit-icon.png";
import { ContactListingType } from "../../common/type";

type Props = {
  config: any[];
  data: ContactListingType[];
  showActions?: boolean;
  showCheckbox?: boolean;
  setData: Dispatch<React.SetStateAction<any[]>>;
};

export default function Table({
  data,
  config,
  showActions = true,
  showCheckbox = true,
  setData,
}: Props) {
  const [isAllSelected, setIsAllSelected] = useState(false);
  useEffect(() => {
    const allChecked =
      data.length > 0 && data.every((contact) => contact.selected);
    setIsAllSelected(allChecked);
  }, [data]);

  const toggleSelect = (id: number) => {
    setData(
      data.map((contact) =>
        contact.id === id
          ? { ...contact, selected: !contact.selected }
          : contact
      )
    );
  };

  const toggleSelectAll = () => {
    const newSelectState = !isAllSelected;
    setIsAllSelected(newSelectState);
    setData(data.map((contact) => ({ ...contact, selected: newSelectState })));
  };

  return (
    <div className="contact-table-container">
      <div className="table-wrapper">
        <table className="contact-table">
          <thead className="table-header">
            <tr>
              {showCheckbox && (
                <th className="checkbox-column">
                  <input
                    type="checkbox"
                    className="checkbox-style"
                    checked={isAllSelected}
                    onChange={toggleSelectAll}
                  />
                </th>
              )}
              {config.map((col) => (
                <th key={col.key}>{col.label}</th>
              ))}
              {showActions && (
                <th className="action-column">
                  <Settings size={18} className="settings-icon" />
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((contact) => {
              const tagsToShow = contact.tags.slice(0, 2);
              const extraCount = contact.tags.length - 2;
              const showExtra = contact.tags.length > 2;
              return (
                <tr key={contact.id}>
                  <td className="checkbox-column">
                    <input
                      type="checkbox"
                      checked={contact.selected}
                      onChange={() => toggleSelect(contact.id)}
                    />
                  </td>
                  <td className="name-column">
                    <div className="contact-name">{contact.name}</div>
                    <div className="contact-type">{contact.type}</div>
                  </td>
                  <td>
                    <div className="icon-text">
                      <img src={emailIcon} alt="phoneIcon" />
                      {contact.email}
                    </div>
                  </td>
                  <td>
                    <div className="icon-text">
                      <img src={phoneIcon} alt="phoneIcon" />
                      {contact.phone}
                    </div>
                  </td>
                  <td>{contact.opportunity}</td>
                  <td>
                    {contact.assignToMe ? (
                      <div className="assign-to-me">
                        <span className="status-dot"></span>
                        {contact.responsible}
                      </div>
                    ) : (
                      <div className="responsible-user">
                        <div className="avatar">S</div>
                        {contact.responsible}
                      </div>
                    )}
                  </td>
                  <td>
                    <div className="tags-container">
                      {tagsToShow.map((tag, index) => {
                        const tagClass =
                          tag === "BTP"
                            ? "tag-red"
                            : tag === "BtoB"
                            ? "tag-blue"
                            : "tag-gray";
                        return (
                          <span key={index} className={`tag ${tagClass}`}>
                            {tag}
                          </span>
                        );
                      })}

                      {showExtra && (
                        <span className="tag tag-gray">+{extraCount}</span>
                      )}
                    </div>
                  </td>
                  {showActions && (
                    <td className="action-column">
                      <div className="action-buttons">
                        <button className="action-button edit-button">
                          <img src={editIcon} alt="editIcon" />
                        </button>
                        <button className="action-button delete-button">
                          <img src={trashIcon} alt="trashIcon" />
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
