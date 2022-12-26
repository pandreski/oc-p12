import React from 'react';
import { Outlet } from 'react-router-dom';
import Aside from '../Aside';
import Container from '../Container';
import Header from '../Header';

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
