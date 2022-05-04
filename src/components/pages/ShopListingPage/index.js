import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import {
  Paragraph,
  Link,
  ShopItemCard,
  PageTitleFrame,
  Spacer,
  Icon,
} from 'components';
import {
  Earrings,
  Nose,
  Pendants,
  Rings,
  Sets,
} from '../../atoms/JSONListings';
import { palette } from 'styled-theme';

const LinkStyle = css`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
`;

const LeftStyledLink = styled(Link)`
  ${LinkStyle}
  justify-content: flex-start;
  width: 100%;
  text-align: left;
  padding-left: 4rem;
  margin-top: 1rem;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  ${LinkStyle}
  justify-content: center;
  width: 100%;
`;

const StyledIcon = styled(Icon)`
  height: 1.1rem;
  width: 1.1rem;
  margin-right: 0.4rem;
  color: ${palette('copper', 1)};
`;

const getListing = (currentCategory, currentListing) => {
  let category = [];
  switch (currentCategory) {
    case 'earrings':
      category = Earrings;
      break;
    case 'nose':
      category = Nose;
      break;
    case 'pendants':
      category = Pendants;
      break;
    case 'rings':
      category = Rings;
      break;
    case 'sets':
      category = Sets;
      break;
    default:
      break;
  }
  const listing = category.find(
    (item) => item.listingId.toString() === currentListing.toString()
  );
  return listing;
};

const ShopListingPage = ({ title }) => {
  const currentCategory = window.location.pathname.split('/')[2];
  const currentListing = window.location.pathname.split('/')[3];

  const [listing, setListing] = useState(
    getListing(currentCategory, currentListing)
  );

  return (
    <>
      <PageTitleFrame
        title={listing?.title || 'Nope!'}
        subtitle={listing?.subtitle}
      >
        <LeftStyledLink to={`/shop/${currentCategory}`}>
          <StyledIcon icon='left_arrow' />
          Back
        </LeftStyledLink>
        <ShopItemCard {...listing} />
      </PageTitleFrame>
      <StyledLink to={`/shop/${currentCategory}`}>
        <StyledIcon icon='left_arrow' />
        Back
      </StyledLink>
      <Spacer />
    </>
  );
};

ShopListingPage.propTypes = {
  title: PropTypes.string,
};

export default ShopListingPage;
