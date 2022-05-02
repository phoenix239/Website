import React from 'react';
import styled, { css } from 'styled-components';
import { font, palette } from 'styled-theme';
import { Label, PageTitleFrame, Paragraph, Spacer } from 'components';

const ParagraphWrapper = styled(Paragraph)`
  display: flex;
  justify-content: center;
  padding-top: 0.5rem;
  font-family: ${font('primary')};
  color: ${palette('grayscale', 2)};
  font-weight: 530;
`;

const GalleryWrapper = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: -2rem;
  width: 90%;
`;

const Styling = css`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledImage = styled.img`
  ${Styling}
  border-radius: 0.25rem;
  height: 250px;
  margin-bottom: 1rem;
`;

const StyledLabel = styled(Label)`
  ${Styling}
  border-radius: 0.5rem;
  color: ${palette('copper', 0)};
  font-family: ${font('primary')};
  font-size: 1rem;
  font-weight: 500;
  margin-top: 1rem;
  padding: 0.5rem;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  }
`;

const GalleryPage = () => {
  const imageLinks = (link) => {
    location.href = link.url;
  };

  return (
    <>
      <PageTitleFrame title='Custom Pieces and Past Items' noBottomRule>
        <ParagraphWrapper>
          If you are interested in getting one of these made for yourself or
          have an idea for a custom item, head over to the contact page and send
          me a message.
        </ParagraphWrapper>
        <GalleryWrapper>
          <StyledLabel onClick={() => imageLinks({ url: '/gallery/rings' })}>
            <StyledImage src='/images/gallery/Rings.png' alt='Rings' />
            Rings
          </StyledLabel>
          <StyledLabel onClick={() => imageLinks({ url: '/gallery/pendants' })}>
            <StyledImage src='/images/gallery/Pendants.png' alt='Pendants' />
            Pendants
          </StyledLabel>
          <StyledLabel onClick={() => imageLinks({ url: '/gallery/earrings' })}>
            <StyledImage src='/images/gallery/Earrings.png' alt='Earrings' />
            Earrings
          </StyledLabel>
          <StyledLabel onClick={() => imageLinks({ url: '/gallery/other' })}>
            <StyledImage src='/images/gallery/Other.png' alt='Other' />
            Other
          </StyledLabel>
        </GalleryWrapper>
      </PageTitleFrame>
      <PageTitleFrame title='Fabrication' noBottomRule>
        <ParagraphWrapper>Pictures from the building process.</ParagraphWrapper>
        <GalleryWrapper>
          <StyledLabel
            onClick={() => imageLinks({ url: '/gallery/fabrication' })}
          >
            <StyledImage
              src='/images/gallery/Fabrication.png'
              alt='Fabrication'
            />
            Fabrication
          </StyledLabel>
        </GalleryWrapper>
      </PageTitleFrame>
      <Spacer />
    </>
  );
};

export default GalleryPage;
