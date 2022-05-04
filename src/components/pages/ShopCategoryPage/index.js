import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { font, palette } from 'styled-theme';
import {
  Paragraph,
  Link,
  ShopListingGalleryCard,
  Dropdown,
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
import { SORT_OPTIONS } from '../../atoms/SortOptions';
import HorizontalRule from '../../atoms/HorizontalRule';

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Footnote = styled.div`
  font-family: ${font('primary')};
  color: ${palette('danger', 0)};
  font-weight: 300;
  line-height: 1.5rem;
  font-size: 0.75rem;
  font-style: italic;
  text-transform: uppercase;
  text-align: center;
  width: 90%;
`;

const NavWrapper = styled(Paragraph)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 90%;
  text-align: center;
  cursor: pointer;
`;

const StyledDropdown = styled(Dropdown)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 100%;
  cursor: pointer;
  border-color: transparent;
  color: ${palette('copper', 0)};
  font-family: ${font('primary')};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;

  &:enabled {
    color: ${palette('copper', 0)};
  }

  &:disabled {
    color: ${palette('grayscale', 2)};
    cursor: not-allowed;
  }

  &:hover {
    color: ${palette('copper', 1)};
  }

  &:focus {
    outline: none;
  }

  &:active {
    color: ${palette('copper', 2)};
  }
`;

const FreeShippingFlag = styled.div`
  position: relative;
  top: -0.6rem;
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 1.6rem;
  text-align: center;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  background-color: ${palette('success', 3)};
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  border: 1px solid ${palette('grayscale', 6)};
  border-top: 1px solid ${palette('grayscale', 4)};
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  align-items: center;
  align-content: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: ${font('primary')};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
`;

const StyledIcon = styled(Icon)`
  height: 1rem;
  width: 1rem;
  margin-right: 0.4rem;
  margin-top: -0.3rem;
  color: ${palette('copper', 1)};
`;

const ShopCategoryPage = () => {
  // Get current page from url
  const currentPage = window.location.pathname.split('/')[2];

  const listings = (currentCategory) => {
    switch (currentCategory) {
      case 'earrings':
        return { label: 'Earrings', category: Earrings };
      case 'nose':
        return { label: 'Nose', category: Nose };
      case 'pendants':
        return { label: 'Pendants', category: Pendants };
      case 'rings':
        return { label: 'Rings', category: Rings };
      case 'sets':
        return { label: 'Sets', category: Sets };
      default:
        return { label: 'UH OH!', category: null };
    }
  };

  const listingsData = listings(currentPage);
  const [sortedListings, setSortedListings] = useState(listingsData);

  const setSortListings = (sortBy) => {
    let listings = [];

    switch (sortBy) {
      case 'priceASC':
        listings = listingsData.category.sort(
          (a, b) => a.price.amount - b.price.amount
        );
        break;
      case 'priceDESC':
        listings = listingsData.category.sort(
          (a, b) => b.price.amount - a.price.amount
        );
        break;
      case 'titleASC':
        listings = listingsData.category.sort((a, b) =>
          a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
        );
        break;
      case 'titleDESC':
        listings = listingsData.category.sort((a, b) =>
          a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1
        );
        break;
      case 'dateASC':
        listings = listingsData.category.sort(
          (a, b) => b.creationDate - a.creationDate
        );
        break;
      case 'dateDESC':
        listings = listingsData.category.sort(
          (a, b) => a.creationDate - b.creationDate
        );
        break;
      default:
        listings = listingsData.category.sort((a, b) => a.index - b.index);
        break;
    }
    setSortedListings({
      label: listingsData.label,
      category: listings,
    });
  };

  const [value, setValue] = useState(SORT_OPTIONS[0].value);

  const handleSortChange = (e) => {
    setValue(e.target.value);
    setSortListings(e.target.value);
  };

  return (
    <>
      <PageTitleFrame title={listingsData.label}>
        <NavWrapper>
          <StyledLink to='/shop'>
            <StyledIcon icon='left_arrow' />
            Back
          </StyledLink>
          <StyledDropdown
            onChange={handleSortChange}
            options={SORT_OPTIONS}
            label='Sorting: '
            value={value}
          />
        </NavWrapper>
        <Spacer small />
        <HorizontalRule />
        <FreeShippingFlag>Free Shipping on orders over $35</FreeShippingFlag>
        <Spacer small />
        <GalleryWrapper>
          {sortedListings.category.map((listing, index) => (
            <Link
              to={`/shop/${currentPage}/${listing.listingId}`}
              title={listing.title}
              key={listing.listingId}
            >
              <ShopListingGalleryCard {...listing} />
            </Link>
          ))}
        </GalleryWrapper>
        <Spacer />
        <HorizontalRule />
        <Spacer small />
        <Footnote>* Sold listings may be available for custom order</Footnote>
        <Footnote>Contact me for more Information </Footnote>
      </PageTitleFrame>
      <StyledLink to='/shop'>
        <StyledIcon icon='left_arrow' />
        Back
      </StyledLink>
      <Spacer />
    </>
  );
};

ShopCategoryPage.propTypes = {};

export default ShopCategoryPage;
