import React from 'react';
import {
  Cell, Pie, PieChart, ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useApiUserScore } from '../../hooks/useApi';
import style from './style.module.scss';
import Loader from '../Loader';

export default function TargetScore({ userID }) {
  const { apiUserScore, isLoading } = useApiUserScore(userID);
  const dailyTargetData = [
    { name: 'done', value: apiUserScore },
    { name: 'todo', value: 1 - apiUserScore },
  ];

  return (
    isLoading ? (
      <Loader />
    ) : (
      <div className={style.targetScore}>
        <p className={style.chartTitle}>Score</p>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={dailyTargetData}
              fill="#ff0101"
              dataKey="value"
              innerRadius={90}
              outerRadius={100}
              startAngle={90}
              endAngle={450}
              cornerRadius={15}
            >
              {dailyTargetData.map((_, i) => (
                i === 0 ? <Cell key={uuidv4()} fill="#ff0101" /> : <Cell key={uuidv4()} fill="#fff" />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className={style.label}>
          <div className={style.percentage}>
            {`${apiUserScore * 100}%`}
          </div>
          de votre
          <br />
          objectif
        </div>
      </div>
    )
  );
}

TargetScore.propTypes = {
  userID: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};
