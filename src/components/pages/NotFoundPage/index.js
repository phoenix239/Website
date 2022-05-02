import React from 'react';

import { Heading, PageTitleFrame, Paragraph, Spacer } from 'components';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

const StyledHeading = styled(Heading)`
  text-align: center;
  color: ${palette('copper', 0)};
  font-family: ${font('primary')};
  font-size: 2.5rem;
  font-weight: 500;
  text-transform: uppercase;
`;

const StyledParagraph = styled(Paragraph)`
  text-align: center;
  color: ${palette('grayscale', 0)};
  font-family: ${font('primary')};
  font-size: 1rem;
  font-weight: 500;
`;

const NotFoundPage = () => {
  return (
    <PageTitleFrame title='OOPS!' noBottomRule>
      <Spacer />
      <StyledHeading>404 Page Not Found</StyledHeading>
      <StyledParagraph>
        Don't know how you got here, but this is it... Not much to look at
        huh...?
      </StyledParagraph>
      <StyledParagraph>
        If you think you've found a bug, please let me know.
      </StyledParagraph>
      <StyledParagraph>Maybe try one of the links above...</StyledParagraph>
    </PageTitleFrame>
  );
};

export default NotFoundPage;
