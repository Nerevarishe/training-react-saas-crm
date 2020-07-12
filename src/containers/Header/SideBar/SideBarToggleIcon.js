import styled from "styled-components";
import withContext from "../../../hoc/withContext";

export const SideBarToggleIcon = styled.img`
  vertical-align: middle;
  margin-right: 14px;
  margin-right: ${(props) => (props.state.isSideBarPulledOut ? "14px" : "0")};
`;

export default withContext(SideBarToggleIcon);
