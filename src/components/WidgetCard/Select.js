import styled from "styled-components";
import arrowDown from "./img/svg/select-arrow-down.svg";

const Select = styled.select`
  width: 110px;
  border: none;
  appearance: none;
  background: url(${arrowDown}) no-repeat right center;
  background-size: 7px 4px;
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.01em;
  font-size: 12px;
  line-height: 18px;
  color: ${(props) => props.theme.colors.accentBlueColor};
  cursor: pointer;

  &:focus {
    outline-style: none;
  }
`;

export default Select;
