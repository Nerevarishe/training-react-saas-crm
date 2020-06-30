import styled from "styled-components";

export const GlobalSearchStyled = styled.div`
  position: fixed;
  left: 256px;
  width: calc(100vw - 256px);
  padding: 20px 36px;
  background: ${(props) => props.theme.colors.whiteColor};
`;
