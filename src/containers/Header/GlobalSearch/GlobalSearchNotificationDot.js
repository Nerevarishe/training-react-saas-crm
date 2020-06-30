import styled from "styled-components";

export const GlobalSearchNotificationDot = styled.img`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  right: -2px;
  top: 0;
`;
