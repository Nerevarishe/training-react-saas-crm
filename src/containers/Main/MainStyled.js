import styled from "styled-components";
import withContext from "../../hoc/withContext";

const MainStyled = styled.main`
  display: flex;
  padding: 96px 38px 36px
    ${(props) => (props.state.isSideBarPulledOut ? "292px" : "104px")};
`;

export default withContext(MainStyled);
