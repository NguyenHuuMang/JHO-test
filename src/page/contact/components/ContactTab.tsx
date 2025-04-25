import React, { useState } from "react";
import clsx from "clsx";
import Table from "../../../components/table/Table";
import { CONTACT_LISTING } from "./config";
import { ContactListingType } from "../../../common/type";
import Pagination from "../../../components/pagination";

type Props = {
  className?: string;
};

const ContactTab = ({ className }: Props) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(25);
  const total = 500;
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
  return (
    <div className={clsx("", className)}>
      <Table
        data={data}
        config={CONTACT_LISTING}
        setData={setData}
        showActions={true}
      />
      {/* <Pagination
        currentPage={page}
        totalItems={total}
        itemsPerPage={limit}
        onPageChange={setPage}
        onItemsPerPageChange={(newLimit) => {
          setLimit(newLimit);
          setPage(1);
        }}
      /> */}
    </div>
  );
};

export default ContactTab;
