import React, { useState } from "react";
import clsx from "clsx";
import Table from "../../../components/table/Table";
import { CONTACT_LISTING } from "./config";
import { ContactListingType } from "../../../common/type";
import Pagination from "../../../components/pagination";
import "./../style.scss";
import CreateEditContact from "./CreateEditContact/CreateEditContact";

type Props = {
  className?: string;
};

const ContactTab = ({ className }: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(25);
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [data, setData] = useState<ContactListingType[]>([
    {
      id: 1,
      name: "Romain Gillig",
      type: "Particulier",
      email: "romain@gillig.studio",
      phone: "06 88 65 26 87",
      opportunity: "Formation 3D",
      responsible: "Sébastien",
      tags: ["BTP", "BtoB", "Bopz"],
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
      tags: ["BTP", "BtoB", "Bopz"],
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
      tags: ["BTP", "BtoB", "Bopz"],
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
      tags: ["BTP", "BtoB", "Bopz"],
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
      tags: ["BTP", "BtoB", "Bopz"],
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
      tags: ["BTP", "BtoB", "Bopz"],
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
      tags: ["BTP", "BtoB", "Bopz"],
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
      tags: ["BTP", "BtoB", "Bopz"],
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
      tags: ["BTP", "BtoB", "Bopz"],
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
      tags: ["BTP", "BtoB", "Bopz"],
      selected: false,
    },
  ]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
  };
  function handleEdit() {
    setShowEdit(!showEdit);
  }
  return (
    <div className={clsx("", className)}>
      <Table
        data={data}
        config={CONTACT_LISTING}
        setData={setData}
        showActions={true}
        onEdit={handleEdit}
      />
      <div className="pagination-component">
        <Pagination
          totalItems={data.length}
          itemsPerPageOptions={[10, 25, 50, 100]}
          defaultItemsPerPage={25}
          onPageChange={handlePageChange}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      </div>

      {showEdit && (
        <CreateEditContact
          showCreateEdit={showEdit}
          handleShowCreateEdit={handleEdit}
        />
      )}
    </div>
  );
};

export default ContactTab;
