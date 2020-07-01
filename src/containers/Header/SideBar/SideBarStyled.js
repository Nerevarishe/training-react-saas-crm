import React, {useContext} from 'react';
import styled from "styled-components";
import {Context} from "../../../store";

export const SideBarStyled = styled.nav`
  width: ${props => props.state.isSideBarPulledOut ? "256px" : "68px"};
  height: 100vh;
  position: fixed;
  margin: 0;
  padding: 17px 24px 22px 24px;
  background: ${(props) => props.theme.colors.whiteColor};
  box-shadow: 6px 0 18px rgba(0, 0, 0, 0.06);
`;

export const SideBarStyledWrapped = (props) => {
  const [state, dispatch] = useContext(Context);
  return (
    <SideBarStyled {...props} state={state.appState}>
      {props.children}
    </SideBarStyled>
  );
};

