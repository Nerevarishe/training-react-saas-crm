import styled from "styled-components";

export const HeaderDivider = styled.div`
  height: 1px;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 60px;
  background: ${(props) => props.theme.colors.dividerColor};
  margin-bottom: 24px;
`;
