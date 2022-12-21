import React from 'react';
import logo from '../../assets/images/logo.svg';
import style from './style.module.scss';

export default function Header() {
  return (
    <header className={style.header}>
      <img className={style.headerLogo} src={logo} alt="SportSee" />
      <nav>
        <ul>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  );
}
