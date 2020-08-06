import styled from "styled-components";
import withContext from "../../../../hoc/withContext";

const SideBarLinkIcon = styled.img`
  display: ${(props) => (props.state.isSideBarPulledOut ? "initial" : "block")};
  width: 20px;
  height: 20px;
  margin-right: ${(props) => (props.state.isSideBarPulledOut ? "14px" : "0")}};
  margin: ${(props) =>
    props.state.isSideBarPulledOut ? "0 14px 0 0" : "0 auto"}};
  vertical-align: middle;
`;

export default withContext(SideBarLinkIcon);
