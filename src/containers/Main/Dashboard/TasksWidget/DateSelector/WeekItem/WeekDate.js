import styled from "styled-components";
import { Regular12Font } from "../../../../../../components/Fonts/Fonts";
import withContext from "../../../../../../hoc/withContext";

// TODO: Implement style from context data changed
const WeekDate = styled(Regular12Font)`
  position: absolute;
  top: 28px;
  border: none;
  text-align: center;
  background: none;
  color: ${(props) =>
    props.day === props.currentWeekDay && props.currentDateDay === props.date
      ? props.theme.colors.accentBlueColor
      : props.theme.colors.darkGrayColor};
  cursor: pointer;
  outline-style: none;

  &:hover,
  &:focus,
  &:active {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.accentBlueColor};
    color: ${(props) => props.theme.colors.whiteColor};
  }
`;

export default withContext(WeekDate);
