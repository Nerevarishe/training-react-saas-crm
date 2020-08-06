import styled from "styled-components";

export const SideBarLink = styled.a`
  display: inline-block;
  width: 100%;
  text-decoration: none;
  color: ${(props) =>
    props.isActive || props.isHovered
      ? props.theme.colors.accentBlueColor
      : props.theme.colors.darkBlueColor};
`;
