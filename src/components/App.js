import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { injectGlobal, ThemeProvider } from 'styled-components';
import {
  AppPage,
  LoadingPage,
  NotFoundPage,
  PageTemplate,
  Header,
  Footer,
} from 'components';
import theme from './themes/default';

injectGlobal`
  body {
    margin: 0;
  }
`;

// NOTE: This is a workaround for the componentWillMount error in console
// Remove this before deploying to production
console.warn = () => {};

const App = () => {
  const HomePage = lazy(() => import('components/pages/HomePage'));
  const AboutPage = lazy(() => import('components/pages/AboutPage'));
  const ContactPage = lazy(() => import('components/pages/ContactPage'));
  const GalleryPage = lazy(() => import('components/pages/GalleryPage'));
  const GalleryImagesPage = lazy(() =>
    import('components/pages/GalleryImagesPage')
  );
  const InfoPage = lazy(() => import('components/pages/InfoPage'));
  const ShopCategoryPage = lazy(() =>
    import('components/pages/ShopCategoryPage')
  );
  const ShopListingPage = lazy(() =>
    import('components/pages/ShopListingPage')
  );
  const ShopPage = lazy(() => import('components/pages/ShopPage'));

  return (
    <ThemeProvider theme={theme}>
      <PageTemplate header={<Header />} footer={<Footer />}>
        <Switch>
          {/* /app and /info are hidden */}
          <Route path={`/`} exact>
            <Suspense fallback={<LoadingPage />}>
              <HomePage />
            </Suspense>
          </Route>
          <Route path={`/about`} exact>
            <Suspense fallback={<LoadingPage />}>
              <AboutPage />
            </Suspense>
          </Route>
          <Route path={`/app`} exact>
            <Suspense fallback={<LoadingPage />}>
              <AppPage />
            </Suspense>
          </Route>
          <Route path={`/contact`} exact>
            <Suspense fallback={<LoadingPage />}>
              <ContactPage />
            </Suspense>
          </Route>
          <Route path={`/images`}>
            <Suspense fallback={<LoadingPage />}>
              <NotFoundPage />
            </Suspense>
          </Route>
          <Route path={`/json`}>
            <Suspense fallback={<LoadingPage />}>
              <NotFoundPage />
            </Suspense>
          </Route>
          <Route path={`/gallery/rings`} exact>
            <Suspense fallback={<LoadingPage />}>
              <GalleryImagesPage />
            </Suspense>
          </Route>
          <Route path={`/gallery/earrings`} exact>
            <Suspense fallback={<LoadingPage />}>
              <GalleryImagesPage />
            </Suspense>
          </Route>
          <Route path={`/gallery/pendants`} exact>
            <Suspense fallback={<LoadingPage />}>
              <GalleryImagesPage />
            </Suspense>
          </Route>
          <Route path={`/gallery/other`} exact>
            <Suspense fallback={<LoadingPage />}>
              <GalleryImagesPage />
            </Suspense>
          </Route>
          <Route path={`/gallery/fabrication`} exact>
            <Suspense fallback={<LoadingPage />}>
              <GalleryImagesPage />
            </Suspense>
          </Route>
          <Route path={`/gallery`} exact>
            <Suspense fallback={<LoadingPage />}>
              <GalleryPage />
            </Suspense>
          </Route>
          <Route path={`/shop/earrings`} exact>
            <Suspense fallback={<LoadingPage />}>
              <ShopCategoryPage />
            </Suspense>
          </Route>
          <Route path={`/shop/rings`} exact>
            <Suspense fallback={<LoadingPage />}>
              <ShopCategoryPage />
            </Suspense>
          </Route>
          <Route path={`/shop/pendants`} exact>
            <Suspense fallback={<LoadingPage />}>
              <ShopCategoryPage />
            </Suspense>
          </Route>
          <Route path={`/shop/sets`} exact>
            <Suspense fallback={<LoadingPage />}>
              <ShopCategoryPage />
            </Suspense>
          </Route>
          <Route path={`/shop/nose`} exact>
            <Suspense fallback={<LoadingPage />}>
              <ShopCategoryPage />
            </Suspense>
          </Route>
          <Route
            path={`/:category/:listing`}
            render={({ title }) => (
              <Suspense fallback={<LoadingPage />}>
                <ShopListingPage title={title} />
              </Suspense>
            )}
          />
          <Route path={`/shop`} exact>
            <Suspense fallback={<LoadingPage />}>
              <ShopPage />
            </Suspense>
          </Route>
          <Route path={`/info`} exact>
            <Suspense fallback={<LoadingPage />}>
              <InfoPage />
            </Suspense>
          </Route>
          <Route>
            <Suspense fallback={<LoadingPage />}>
              <NotFoundPage />
            </Suspense>
          </Route>
        </Switch>
      </PageTemplate>
    </ThemeProvider>
  );
};

export default App;
