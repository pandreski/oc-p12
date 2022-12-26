import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <p><Link to="/user/12">User 12</Link></p>
      <p><Link to="/user/18">User 18</Link></p>
      <p><Link to="/not-found">Page 404</Link></p>
    </>
  );
}
