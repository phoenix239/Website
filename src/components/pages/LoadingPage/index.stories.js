import React from 'react';
import LoadingPage from '.';

export default {
  title: 'Common/Pages/LoadingPage',
  component: LoadingPage
};

const history = { replace: () => {}, location: { pathname: '/admin/company' } };
const match = {
  isExact: true,
  params: {},
  pathname: '/admin/company',
  url: '/admin/company'
};
export const defaultStory = () => (
  <LoadingPage history={history} match={match} location={history.location} />
);

defaultStory.storyName = 'default';
