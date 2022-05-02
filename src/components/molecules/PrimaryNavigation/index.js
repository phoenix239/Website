import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { palette } from 'styled-theme';

import { Link } from 'components';

const Nav = styled.nav`
  display: flex;
  list-style: none;
  > :not(:first-child) {
    margin-left: 2rem;
  }
  a {
    font-weight: 300;
    color: ${palette('grayscale', 2)};
    font-size: 1.25rem;
    &.selected {
      color: ${palette('copper', 0)};
    }
  }
`;

const PrimaryNavigation = (props) => {
  return (
    <Nav {...props}>
      <li>
        <Link to='/shop' activeClassName='selected'>
          Shop
        </Link>
        {/* <Link href='https://www.etsy.com/shop/adamboyddesigns/'>Shop</Link> */}
      </li>
      <li>
        <Link to='/gallery' activeClassName='selected'>
          Gallery
        </Link>
      </li>
      <li>
        <Link to='/about' activeClassName='selected'>
          About
        </Link>
      </li>
      <li>
        <Link to='/contact' activeClassName='selected'>
          Contact
        </Link>
      </li>
    </Nav>
  );
};

PrimaryNavigation.propTypes = {
  reverse: PropTypes.bool,
};

export default PrimaryNavigation;
