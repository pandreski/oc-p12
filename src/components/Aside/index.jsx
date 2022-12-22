import React from 'react';
import iconBike from '../../assets/images/bike.svg';
import iconDumbells from '../../assets/images/dumbells.svg';
import iconSwim from '../../assets/images/swim.svg';
import iconYoga from '../../assets/images/yoga.svg';
import style from './style.module.scss';

export default function Aside() {
  return (
    <aside className={style.aside}>
      <nav>
        <ul className={style.icons}>
          <li className={style.icon}>
            <img src={iconYoga} alt="Yoga" />
          </li>
          <li className={style.icon}>
            <img src={iconSwim} alt="Natation" />
          </li>
          <li className={style.icon}>
            <img src={iconBike} alt="Vélo" />
          </li>
          <li className={style.icon}>
            <img src={iconDumbells} alt="Musculation" />
          </li>
        </ul>
      </nav>
      <p className={style.copyright}>Copyright, SportSee 2020</p>
    </aside>
  );
}
