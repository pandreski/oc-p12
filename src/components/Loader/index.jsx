import React from 'react';
import style from './style.module.scss';

/**
 * Component displaying a loading spinner.
 * @component
 * @example
 * return (
 *  <Loader />
 * )
 */
export default function Loader() {
  return (
    <div className={style.loader}>
      <span className={style.spinner} />
    </div>
  );
}
