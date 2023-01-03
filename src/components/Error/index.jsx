import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './style.module.scss';

/**
 * Component displaying the error page.
 * @component
 * @example
 * const title1 = 'Page';
 * const title2 = 'not found';
 * const message = 'The page you are looking for does not exist.'
 * return (
 *  <Error title1={title1} title2={title2} message={message} />
 * )
 */
export default function Error({ title1, title2, message }) {
  return (
    <div>
      <div className={style.title}>
        {title1}
        {' '}
        <div className={style.highlight}>{title2}</div>
      </div>
      <div className={style.message}>
        {message}
        <Link to="/">Retour à l&apos;accueil</Link>
      </div>
    </div>
  );
}

Error.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
