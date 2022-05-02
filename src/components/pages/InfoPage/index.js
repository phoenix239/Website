import React from 'react';

import { Heading, PageTitleFrame } from 'components';

const InfoPage = () => {
  return (
    <PageTitleFrame title='Info' noBottomRule>
      <Heading>
        <br />
        Hello! What are you doing here?
      </Heading>
    </PageTitleFrame>
  );
};

export default InfoPage;
