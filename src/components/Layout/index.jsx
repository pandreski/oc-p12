import React from 'react';
import { Outlet } from 'react-router-dom';
import Aside from '../Aside';
import Container from '../Container';
import Header from '../Header';

/**
 * Page's layout including routing capability.
 * @component
 * @example
 * return (
 *  <Layout />
 * )
 */
export default function Layout() {
  return (
    <>
      <Header />
      <Aside />
      <Container>
        <main>
          <Outlet />
        </main>
      </Container>
    </>
  );
}
