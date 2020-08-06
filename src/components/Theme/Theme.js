import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    accentBlueColor: "#109cf1",
    yellowColor: "#ffb946",
    redColor: "#f7685b",
    greenColor: "#2ed47a",
    purpleColor: "#885af8",
    blackColor: "#192a3e",
    tableBlackColor: "#323c47",
    tableGrayColor: "#707683",
    darkBlueColor: "#334d6e",
    grayColor: "#90a0b7",
    iconGrayColor: "#c2cfe0",
    whiteColor: "#ffffff",
    dividerColor: "#ebeff2",
    mainBgColor: "#f5f6f8",
    grayBlueColor: "#6a707e",
    darkGrayColor: "#4c5862",

    buttonHoverColor: "#34aff9",
    buttonActiveColor: "#098edf",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
