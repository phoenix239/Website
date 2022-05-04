import React, { useState } from 'react';
import {
  PageTitleFrame,
  Link,
  Spacer,
  HorizontalRule,
  Paragraph,
  Icon,
} from 'components';
import styled, { css } from 'styled-components';
import categories from '../../../../public/json/Images.json';
import Modal from '../../molecules/Modal';
import { font, palette } from 'styled-theme';

const IMAGE_HEIGHT = '225px';
const IMAGE_WIDTH = '225px';

const GalleryWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1.5rem;
  width: 100%;
`;

const ImageCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.25rem;

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  }
`;

const ImageWrapper = styled.img`
  border-radius: 0.25rem;
  cursor: pointer;
  object-fit: cover;
  height: ${IMAGE_HEIGHT};
  width: ${IMAGE_WIDTH};
`;

const ModalImageWrapper = styled.img`
  border-radius: 0.25rem;
  width: 100%;
  // height screen size minus 2rem
  max-height: calc(70vh);
  object-fit: cover;
`;

const Description = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem;
  text-align: center;
  font-size: 1rem;
  color: ${palette('copper', 0)};
`;

const DescriptionLine = styled.p`
  margin: 0.1rem;
`;

const NavWrapper = styled(Paragraph)`
  width: 90%;
  cursor: pointer;
`;

const NavLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
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

const IconStyle = css`
  height: 1rem;
  width: 1rem;
  margin-right: 0.4rem;
  color: ${palette('copper', 1)};
`;

const StyledIcon = styled(Icon)`
  ${IconStyle}
  margin-top: -0.3rem;
`;

const StyledLeftIcon = styled(Icon)`
  ${IconStyle}
  margin-top: -0.15rem;
`;

// Get current page from url
const currentPage = window.location.pathname.split('/')[2];

// Get Section from url
const section = (props) => {
  switch (props) {
    case 'rings':
      return categories.rings;
    case 'pendants':
      return categories.pendants;
    case 'earrings':
      return categories.earrings;
    case 'other':
      return categories.other;
    case 'fabrication':
      return categories.fabrication;
    default:
      break;
  }
};

const GalleryImagesPage = () => {
  const imagesInfo = section(currentPage);

  const [isOpen, setIsOpen] = useState(false);
  const [modalImage, setImage] = useState();

  // handle close modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // handle open modal
  const openModal = (image) => {
    setImage(image);
    setIsOpen(true);
  };

  return (
    <>
      <PageTitleFrame title={imagesInfo.title}>
        <NavWrapper>
          <NavLink to='/gallery'>
            <StyledLeftIcon icon='left_arrow' />
            Back
          </NavLink>
        </NavWrapper>
        <Spacer small />
        <HorizontalRule />
        <GalleryWrapper>
          {imagesInfo.images.map((image, index) => (
            <ImageCard key={index}>
              <ImageWrapper
                src={`/images/gallery/${image.filename}`}
                key={`${image.filename}-${index}`}
                alt={image.altText}
                onClick={() =>
                  openModal({
                    imageSrc: `/images/gallery/${image.filename}`,
                    title: image.altText,
                    description: image.description,
                  })
                }
              />
            </ImageCard>
          ))}
        </GalleryWrapper>
      </PageTitleFrame>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title={modalImage?.title}
        description={modalImage?.description}
        width={700}
      >
        <ModalImageWrapper
          src={modalImage?.imageSrc}
          alt='Modal'
          onClick={closeModal}
        />
        <Description>
          {modalImage?.description.map((line, index) => (
            <DescriptionLine key={index}>{line}</DescriptionLine>
          ))}
        </Description>
      </Modal>
      <Spacer small />
      <StyledLink to='/gallery'>
        <StyledIcon icon='left_arrow' />
        Back
      </StyledLink>
      <Spacer />
    </>
  );
};

export default GalleryImagesPage;
