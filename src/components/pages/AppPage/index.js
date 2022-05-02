// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react';

import { Hero, FeatureList, PageTitleFrame } from 'components';

const AppPage = () => {
  return (
    <PageTitleFrame title='App' noBottomRule>
      <Hero />
      <FeatureList />
    </PageTitleFrame>
  );
};

export default AppPage;
