import styled from "styled-components";

export const ProgressBarStyled = styled.progress`
  width: 100%;
  height: 4px;
  margin-bottom: 20px;
  border: none;
  border-radius: 3px;
  background: ${(props) => props.theme.colors.dividerColor};

  &::-webkit-progress-bar {
    width: 100%;
    height: 4px;
    border: none;
    border-radius: 3px;
    background: ${(props) => props.theme.colors.dividerColor};
  }

  &::-webkit-progress-value {
    border-radius: 3px;
    background: ${(props) => props.theme.colors.greenColor};
  }

  &::-moz-progress-bar {
    border-radius: 3px;
    background: ${(props) => props.theme.colors.greenColor};
  }
`;
