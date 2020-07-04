import styled from "styled-components";
import withContext from "../../../../hoc/withContext";

const ProfileUserInfo = styled.div`
  display: ${(props) => (props.state.isSideBarPulledOut ? "flex" : "none")};
  flex-direction: column;
  margin-left: 16px;
`;

export default withContext(ProfileUserInfo);
