import React from 'react';
import PropTypes from 'prop-types';
import {
  PolarAngleAxis,
  PolarGrid, Radar, RadarChart, ResponsiveContainer,
} from 'recharts';
import Loader from '../Loader';
import { useApiUserActivityTypes } from '../../hooks/useApi';
import style from './style.module.scss';

/**
 * Component displaying the Category chart (radar).
 * @component
 * @example
 * const userID = 12;
 * return (
 *  <CategoryChart userID={userID} />
 * )
 */
export default function CategoryChart({ userID }) {
  const { apiUserActivityTypes, isLoading } = useApiUserActivityTypes(userID);

  return (
    <div className={style.categoryChart}>
      {
        isLoading ? (
          <Loader />
        ) : apiUserActivityTypes && (
          <ResponsiveContainer width="100%" height={200}>
            <RadarChart data={apiUserActivityTypes}>
              <PolarGrid />
              <PolarAngleAxis
                dataKey="kind"
                tick={{ fill: '#fff', fontSize: 12 }}
              />
              <Radar
                dataKey="value"
                fill="#FF0101"
                fillOpacity={0.7}
              />
            </RadarChart>
          </ResponsiveContainer>
        )
      }
    </div>
  );
}

CategoryChart.propTypes = {
  userID: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};
