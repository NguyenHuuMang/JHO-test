import React from "react";
import clsx from "clsx";
import Table from "../../../components/table/Table";

type Props = {
  className?: string;
};

const ContactTab = ({ className }: Props) => {
  return (
    <div className={clsx("", className)}>
      <Table />
    </div>
  );
};

export default ContactTab;
