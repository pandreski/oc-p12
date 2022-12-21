import React from 'react';
import iconBike from '../../assets/images/bike.svg';
import iconDumbells from '../../assets/images/dumbells.svg';
import iconSwim from '../../assets/images/swim.svg';
import iconYoga from '../../assets/images/yoga.svg';
import style from './style.module.scss';

export default function Aside() {
  return (
    <aside className={style.aside}>
      <div className={style.icons}>
        <div className={style.icon}>
          <img src={iconYoga} alt="" />
        </div>
        <div className={style.icon}>
          <img src={iconSwim} alt="" />
        </div>
        <div className={style.icon}>
          <img src={iconBike} alt="" />
        </div>
        <div className={style.icon}>
          <img src={iconDumbells} alt="" />
        </div>
      </div>
      <p className={style.copyright}>Copyright, SportSee 2020</p>
    </aside>
  );
}
