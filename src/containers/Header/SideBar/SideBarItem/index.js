import React, { useContext, useState } from "react";
import { SideBarDivider } from "./SideBarDivider";
import { SideBarItemStyled } from "./SideBarItemStyled";
import { SideBarLink } from "./SideBarLink";
import { Medium13Font } from "../../../../components/Fonts/Fonts";
import SideBarLinkIcon from "./SideBarLinkIcon";
import { Context } from "../../../../store";

const SideBarItem = (props) => {
  const [state, dispatch] = useContext(Context);
  const [isHovered, setIsHovered] = useState(false);

  return props.data.divider ? (
    <SideBarDivider />
  ) : (
    <SideBarItemStyled>
      <SideBarLink
        href="#"
        isActive={props.data.isActive}
        isHovered={isHovered}
        onMouseEnter={() => setIsHovered(!isHovered)}
        onMouseLeave={() => setIsHovered(!isHovered)}
      >
        <SideBarLinkIcon
          src={
            props.data.isActive || isHovered
              ? props.data.image.imgActive
              : props.data.image.img
          }
          alt={props.data.image.alt}
        />
        <Medium13Font show={state.appState.isSideBarPulledOut}>
          {props.data.text}
        </Medium13Font>
      </SideBarLink>
    </SideBarItemStyled>
  );
};

export default SideBarItem;
