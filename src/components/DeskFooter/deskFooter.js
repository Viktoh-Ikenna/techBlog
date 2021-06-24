import React from "react";
import "./deskFooter.css";
import { MdCopyright } from "react-icons/md";

const DeskFooter = () => {
  return (
    <div className="deskFooter">
      <div>
        <div>about us</div>
        <div>contact us</div>
        <div>declaimer</div>
        <div>policy</div>
      </div>
      <div>
        copyright
        <MdCopyright />
        2021 by Don_Viktoh{" "}
      </div>
    </div>
  );
};

export default DeskFooter;
