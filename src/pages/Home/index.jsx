import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.scss';

export default function Home() {
  return (
    <>
      <p>Accès rapide :</p>
      <p><Link to="/user/12" className={style.anchor}>User 12</Link></p>
      <p><Link to="/user/18" className={style.anchor}>User 18</Link></p>
      <p><Link to="/not-found" className={style.anchor}>Page 404</Link></p>
    </>
  );
}
