import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';

export default function Container({ children }) {
  return (
    <div className={style.container}>
      <div className={style.containerWrapper}>
        {children}
      </div>
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
