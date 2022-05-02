import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { basename } from 'config';
import App from 'components/App';
import styled from 'styled-components';

// set vertical scrollbar to always show
document.body.style.overflowY = 'scroll';

const renderApp = () => (
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);

const root = document.getElementById('app');
render(renderApp(), root);

if (module.hot) {
  module.hot.accept('components/App', () => {
    require('components/App');
    render(renderApp(), root);
  });
}
