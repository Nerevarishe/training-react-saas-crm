import React from "react";
import LoaderStyled from "./LoaderStyled";
import styled from "styled-components";

const LoaderPosition = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  overflow: hidden;
  z-index:1000;
`;

const Loader = () => {
  return (
    <LoaderPosition>
      <LoaderStyled />
    </LoaderPosition>
  );
};

export default Loader;
