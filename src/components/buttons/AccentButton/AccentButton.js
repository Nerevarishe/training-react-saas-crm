import styled from "styled-components";
import BaseButton from "../BaseButton";

const AccentButton = styled(BaseButton)`
  min-width: 160px;
  max-height: 42px;
  padding: 11px 14px;
  box-shadow: 0px 4px 10px rgba(16, 156, 241, 0.24);
  background: ${(props) => props.theme.colors.accentBlueColor};
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.01em;
  color: ${(props) => props.theme.colors.whiteColor};
  
  &:hover,
  &:focus {
    box-shadow: 0px 8px 16px rgba(52, 175, 249, 0.2);
    background: ${(props) => props.theme.colors.buttonHoverColor};
  }
  
  &:active {
    box-shadow: 0px 2px 6px rgba(9, 142, 223, 0.3);
    background: ${(props) => props.theme.colors.buttonActiveColor};
  }
  
  &:disabled {
    box-shadow: unset;
    background: ${(props) => props.theme.colors.iconGrayColor};
    color: rgba(255, 255, 255, 0.8);
  }
`;

export default AccentButton;
