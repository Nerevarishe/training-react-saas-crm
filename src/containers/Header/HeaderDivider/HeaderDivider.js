import styled from "styled-components";

const HeaderDivider = styled.div`
  height: 1px;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 60px;
  background: ${(props) => props.theme.colors.dividerColor};
  margin-bottom: 24px;
  z-index: 1;
`;

export default HeaderDivider;
