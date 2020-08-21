import React from "react";
import "./SideBarOption.css";

const SideBarOption = ({ text, Icon, active }) => {
  return (
    <div className={`sidebar__option ${active && "sidebar__option--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SideBarOption;
