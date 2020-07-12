import styled from "styled-components";

export const WeekDay = styled.div`
  margin-bottom: 8px;
  text-align: center;
  color: ${(props) =>
    props.day === props.currentWeekDay && props.currentDateDay === props.date
      ? props.theme.colors.accentBlueColor
      : props.theme.colors.darkBlueColor};
`;
