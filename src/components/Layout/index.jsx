import React from 'react';
import PropTypes from 'prop-types';
import Aside from '../Aside';
import Container from '../Container';
import Header from '../Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Aside />
      <Container>
        {children}
      </Container>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
