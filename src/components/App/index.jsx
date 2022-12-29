import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import Home from '../../pages/Home';
import Layout from '../Layout';
import Error404 from '../../pages/Error404';

/**
 * The main component of the app, including the routing.
 * @component
 * @example
 * return (
 *  <App />
 * )
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/user/:uid" element={<Dashboard />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}
