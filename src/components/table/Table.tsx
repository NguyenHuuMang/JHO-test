import { useState } from "react";
import { Trash2, Edit, Settings } from "lucide-react";
import "./style.scss";

export default function Table() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Romain Gillig",
      type: "Particulier",
      email: "romain@gillig.studio",
      phone: "06 88 65 26 87",
      opportunity: "Formation 3D",
      responsible: "Sébastien",
      tags: ["BTB", "B2B"],
      selected: false,
    },
    {
      id: 2,
      name: "Romain Gillig",
      type: "Particulier",
      email: "romain@gillig.studio",
      phone: "06 88 65 26 87",
      opportunity: "Formation 3D",
      responsible: "Sébastien",
      tags: ["BTB", "B2B"],
      selected: false,
    },
    {
      id: 3,
      name: "Romain Gillig",
      type: "Particulier",
      email: "romain@gillig.studio",
      phone: "06 88 65 26 87",
      opportunity: "Formation 3D",
      responsible: "Me l'assigner",
      tags: ["BTB", "B2B"],
      selected: false,
      assignToMe: true,
    },
    {
      id: 4,
      name: "Romain Gillig",
      type: "Particulier",
      email: "romain@gillig.studio",
      phone: "06 88 65 26 87",
      opportunity: "Formation 3D",
      responsible: "Sébastien",
      tags: ["BTB", "B2B"],
      selected: false,
    },
    {
      id: 5,
      name: "Romain Gillig",
      type: "Particulier",
      email: "romain@gillig.studio",
      phone: "06 88 65 26 87",
      opportunity: "Formation 3D",
      responsible: "Sébastien",
      tags: ["BTB", "B2B"],
      selected: false,
    },
    {
      id: 6,
      name: "Romain Gillig",
      type: "Particulier",
      email: "romain@gillig.studio",
      phone: "06 88 65 26 87",
      opportunity: "Formation 3D",
      responsible: "Sébastien",
      tags: ["BTB", "B2B"],
      selected: false,
    },
    {
      id: 7,
      name: "Romain Gillig",
      type: "Particulier",
      email: "romain@gillig.studio",
      phone: "06 88 65 26 87",
      opportunity: "Formation 3D",
      responsible: "Sébastien",
      tags: ["BTB", "B2B"],
      selected: false,
    },
    {
      id: 8,
      name: "Romain Gillig",
      type: "Particulier",
      email: "romain@gillig.studio",
      phone: "06 88 65 26 87",
      opportunity: "Formation 3D",
      responsible: "Sébastien",
      tags: ["BTB", "B2B"],
      selected: false,
    },
    {
      id: 9,
      name: "Romain Gillig",
      type: "Particulier",
      email: "romain@gillig.studio",
      phone: "06 88 65 26 87",
      opportunity: "Formation 3D",
      responsible: "Sébastien",
      tags: ["BTB", "B2B"],
      selected: false,
    },
    {
      id: 10,
      name: "Romain Gillig",
      type: "Particulier",
      email: "romain@gillig.studio",
      phone: "06 88 65 26 87",
      opportunity: "Formation 3D",
      responsible: "Sébastien",
      tags: ["BTB", "B2B"],
      selected: false,
    },
  ]);

  const toggleSelect = (id: any) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === id
          ? { ...contact, selected: !contact.selected }
          : contact
      )
    );
  };

  return (
    <div className="contact-table-container">
      <div className="table-wrapper">
        <table className="contact-table">
          <thead>
            <tr>
              <th className="checkbox-column">
                <input type="checkbox" />
              </th>
              <th>Nom du contact</th>
              <th>Email</th>
              <th>Téléphone</th>
              <th>Opportunity</th>
              <th>Responsable</th>
              <th>Étiquettes</th>
              <th className="action-column">
                <Settings size={18} className="settings-icon" />
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
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
                    <div className="icon-circle">
                      <span>@</span>
                    </div>
                    {contact.email}
                  </div>
                </td>
                <td>
                  <div className="icon-text">
                    <div className="icon-circle">
                      <span>📞</span>
                    </div>
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
                    <span className="tag tag-red">BTB</span>
                    <span className="tag tag-blue">B2B</span>
                    <span className="tag tag-gray">+1</span>
                  </div>
                </td>
                <td className="action-column" style={{ border: "none" }}>
                  <div className="action-buttons" style={{ border: "none" }}>
                    <button
                      className="action-button edit-button"
                      style={{ border: "none" }}
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      className="action-button delete-button"
                      style={{ border: "none" }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
