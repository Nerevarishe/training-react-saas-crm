import styled from "styled-components";
import withContext from "../../../hoc/withContext";

const SideBarStyled = styled.nav`
  width: ${(props) => (props.state.isSideBarPulledOut ? "256px" : "68px")};
  height: 100vh;
  position: fixed;
  padding: ${(props) =>
    props.state.isSideBarPulledOut
      ? "17px 24px 22px 24px"
      : "17px 11px 22px 11px"};
  background: ${(props) => props.theme.colors.whiteColor};
  box-shadow: 6px 0 18px rgba(0, 0, 0, 0.06);
`;

export default withContext(SideBarStyled);
