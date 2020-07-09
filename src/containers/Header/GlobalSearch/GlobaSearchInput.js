import styled from "styled-components";
import { Regular12Font } from "../../../components/Fonts/Fonts";

export const GlobalSearchInput = styled(Regular12Font)`
  width: 500px;
  height: 20px;
  border: none;
  padding-left: 32px;
  background: url(${(props) => props.icon}) no-repeat;

  &:focus {
    outline-style: none;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.grayColor};
  }
`;
