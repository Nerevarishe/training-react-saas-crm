import styled from "styled-components";
import PropTypes from "prop-types";

const Divider = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 54px;
  top: ${(props) => props.topPosition || '54px'};
  height: 1px;
  background: ${(props) => props.theme.colors.dividerColor};
`;

Divider.propTypes = {
  topPosition: PropTypes.string,
};

export { Divider };
