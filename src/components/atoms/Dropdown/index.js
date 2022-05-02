import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { font, palette } from 'styled-theme';

const StyledLabel = styled.label`
  display: flex;
  flex-direction: row;
  color: ${palette('copper', 0)};
  font-family: ${font('primary')};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
`;

const StyledDropdown = styled.select`
  text-align: center;
`;

const StyledOption = styled.option``;

const Dropdown = ({ options, label, onChange, value, ...props }) => {
  return (
    <StyledLabel>
      {label}
      <StyledDropdown value={value} onChange={onChange} {...props}>
        {options.map((option) => (
          <StyledOption key={option.value} value={option.value}>
            {option.label}
          </StyledOption>
        ))}
      </StyledDropdown>
    </StyledLabel>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

Dropdown.defaultProps = {
  options: [],
  label: '',
};

export default Dropdown;
