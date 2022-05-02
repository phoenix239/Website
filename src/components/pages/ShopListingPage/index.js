import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Paragraph,
  Link,
  ShopItemCard,
  PageTitleFrame,
  Spacer,
} from 'components';
import {
  Earrings,
  Nose,
  Pendants,
  Rings,
  Sets,
} from '../../atoms/JSONListings';

const LeftParagraphWrapper = styled(Paragraph)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  width: 100%;
  text-align: left;
  padding-left: 5rem;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
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
        <LeftParagraphWrapper>
          <Link to={`/shop/${currentCategory}`}>🞀 Back</Link>
        </LeftParagraphWrapper>

        <ShopItemCard {...listing} />
      </PageTitleFrame>
      <StyledLink to={`/shop/${currentCategory}`}>🞀 Back</StyledLink>
      <Spacer />
    </>
  );
};

ShopListingPage.propTypes = {
  title: PropTypes.string,
};

export default ShopListingPage;
