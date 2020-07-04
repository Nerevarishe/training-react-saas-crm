import styled from "styled-components";
import withContext from "../../../hoc/withContext";

const GlobalSearchStyled = styled.div`
  position: fixed;
  left: 256px;
  width: calc(100vw - 256px);
  ${(props) =>
    props.state.isSideBarPulledOut
      ? "left: 256px; width: calc(100vw - 256px);"
      : "left: 68px; width: calc(100vw - 68px);"}
  padding: 20px 36px;
  background: ${(props) => props.theme.colors.whiteColor};
`;

export default withContext(GlobalSearchStyled);
