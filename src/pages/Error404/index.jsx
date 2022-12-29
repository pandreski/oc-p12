import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.scss';

/**
 * Component displaying the 404 error page.
 * @component
 * @example
 * return (
 *  <Error404 />
 * )
 */
export default function Error404() {
  return (
    <div>
      <div className={style.title}>
        Page
        {' '}
        <div className={style.highlight}>non trouvée</div>
      </div>
      <div className={style.message}>
        La page que vous cherchez n&apos;existe pas.
        <Link to="/">Retour à l&apos;accueil</Link>
      </div>
    </div>
  );
}
