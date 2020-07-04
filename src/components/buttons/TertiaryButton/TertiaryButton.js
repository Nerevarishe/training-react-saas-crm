import styled from "styled-components";
import BaseButton from "../BaseButton";

const TertiaryButton = styled(BaseButton)`
  border-radius: unset;
  color: ${(props) => props.theme.colors.accentBlueColor};

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.buttonHoverColor};
  }

  &:active {
    color: ${(props) => props.theme.colors.buttonActiveColor};
  }

  &:disabled {
    color: $ ${(props) => props.theme.colors.accentBlueColor};
    opacity: 0.4;
  }
`;

export default TertiaryButton;
