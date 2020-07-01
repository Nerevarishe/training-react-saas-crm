import styled from "styled-components";
import PropTypes from "prop-types";
export const SideBarTitleText = styled.span`
  display: ${(props) => (props.show ? "initial" : "none")};
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: ${(props) => props.theme.colors.accentBlueColor};
`;

SideBarTitleText.propTypes = {
  show: PropTypes.bool,
};

SideBarTitleText.defaultProps = {
  show: true,
};
