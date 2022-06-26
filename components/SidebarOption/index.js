import { Icon } from "@mui/material";
import style from "./SidebarOption.module.css";

function SidebarOption({ active, text, Icon }) {
  return (
    <div
      className={`${style.sidebarOption} ${
        active && style.sidebarOption__active
      }`}
    >
      <Icon />

      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
