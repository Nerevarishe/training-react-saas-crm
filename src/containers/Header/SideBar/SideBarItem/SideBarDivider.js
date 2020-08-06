import styled from "styled-components";

export const SideBarDivider = styled.div`
  height: 1px;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  background: ${(props) => props.theme.colors.dividerColor};
  margin-bottom: 24px;
`;
