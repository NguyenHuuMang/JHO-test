import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

import editIcon from "../../assets/images/edit-icon.png";
import trashIcon from "../../assets/images/trash-icon.png";

interface ListItem {
  id: string;
  name?: string;
  etiquette?: string;
  color?: string;
  contactCount: number;
}

interface Props {
  data: ListItem[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const ListTable: FC<Props> = ({ data, onEdit, onDelete }) => {
  return (
    <div className="list-table">
      <table>
        <thead>
          <tr>
            <th>Nom de la liste</th>
            <th>Contact</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 ? (
            <>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>
                    {item.etiquette ? (
                      <span className={`etiquette-color ${item.color}`}>
                        {item.etiquette}
                      </span>
                    ) : (
                      item.name
                    )}
                  </td>
                  <td>{item.contactCount}</td>
                  <td className="actions">
                    <img
                      src={editIcon}
                      alt="editIcon"
                      className="poiter-icon"
                      onClick={() => onEdit(item.id)}
                    />
                    <img
                      src={trashIcon}
                      alt="trashIcon"
                      className="poiter-icon"
                      onClick={() => onDelete(item.id)}
                    />
                  </td>
                </tr>
              ))}
            </>
          ) : (
            <td className="no-matching" colSpan={2}>
              No matching record found
            </td>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListTable;
