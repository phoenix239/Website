import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

const StyledSpacer = styled.div`
  padding: ${ifProp('small', '0.5rem', '1.5rem')};
`;

const Spacer = ({ small, ...props }) => {
  return <StyledSpacer small={small} {...props} />;
};

Spacer.propTypes = {
  small: PropTypes.bool,
};

Spacer.defaultProps = {
  small: false,
};

export default Spacer;
