import React from 'react';
import style from './style.module.scss';

export default function Loader() {
  return (
    <div className={style.loader}>
      <span className={style.spinner} />
    </div>
  );
}
