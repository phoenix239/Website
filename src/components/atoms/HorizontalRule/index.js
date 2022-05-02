import PropTypes from "prop-types";
import styled from "styled-components";

const HorizontalRule = styled.hr`
  width: 100%;
`;

HorizontalRule.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
};

export default HorizontalRule;
