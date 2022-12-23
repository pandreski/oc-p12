import React from 'react';
import {
  Cell, Pie, PieChart, ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import style from './style.module.scss';

export default function TargetScore({ score }) {
  const dailyTargetData = [
    { name: 'done', value: score },
    { name: 'todo', value: 1 - score },
  ];

  return (
    <div className={style.targetScore}>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart
          width={180}
          height={180}
        >
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
          {`${score * 100}%`}
        </div>
        de votre
        <br />
        objectif
      </div>
    </div>
  );
}

TargetScore.propTypes = {
  score: PropTypes.number.isRequired,
};
