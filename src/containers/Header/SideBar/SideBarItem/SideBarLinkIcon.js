import styled from "styled-components";
import withContext from "../../../../hoc/withContext";

const SideBarLinkIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: ${(props) => (props.state.isSideBarPulledOut ? "14px" : "0")}};
  vertical-align: middle;
`;

export default withContext(SideBarLinkIcon);
