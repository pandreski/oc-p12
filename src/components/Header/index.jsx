import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import style from './style.module.scss';

/**
 * Component displaying the top navigation.
 * @component
 * @example
 * return (
 *  <Header />
 * )
 */
export default function Header() {
  return (
    <header className={style.header}>
      <img className={style.headerLogo} src={logo} alt="SportSee" />
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  );
}
