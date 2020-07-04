import styled from "styled-components";

export const StyledWidgetCard = styled.div`
  position: relative;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  margin-right: 30px;
  padding: 16px 24px;
  background: ${(props) => props.theme.colors.whiteColor}};
  border-radius: 4px;
`;
