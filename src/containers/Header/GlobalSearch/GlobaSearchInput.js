import styled from "styled-components";

export const GlobalSearchInput = styled.input`
  width: 500px;
  height: 20px;
  border: none;
  padding-left: 32px;
  background: url("./img/svg/search.svg") no-repeat;
  @include regular-12-font;

  &:focus {
    outline-style: none;
  }

  &::placeholder {
    color: $gray-color;
  }
`;
