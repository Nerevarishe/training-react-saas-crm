import styled from "styled-components";

export const Divider = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 54px;
  height: 1px;
  background: ${(props) => props.theme.colors.dividerColor};
`;
