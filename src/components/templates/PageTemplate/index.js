// https://github.com/diegohaz/arc/wiki/Atomic-Design#templates
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from 'styled-theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  min-height: 98.1vh;
  box-sizing: border-box;
  overflow-y: overlay;
  @media screen and (max-width: 640px) {
    padding-top: 2rem;
  }
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;

const Hero = styled.section``;

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
  max-width: ${size('maxWidth')};
`;

const Footer = styled.footer`
  margin-top: auto;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 999;
`;

const PageTemplate = ({ header, hero, children, footer, ...props }) => {
  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      {hero && <Hero>{hero}</Hero>}
      <Content>{children}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  );
};

PageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  hero: PropTypes.node,
  footer: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired,
};

export default PageTemplate;
