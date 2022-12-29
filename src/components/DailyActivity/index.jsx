import React from 'react';
import {
  Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { useApiUserDailyActivity } from '../../hooks/useApi';
import Loader from '../Loader';
import style from './style.module.scss';

/**
 * Component that customize tooltip data.
 * @component
 * @example
 * return (
 *  <CustomTooltip />
 * )
 */
function CustomTooltip({ active, payload }) {
  if (active) {
    return (
      <div className={style.customTooltip}>
        {payload.map((elem) => (
          <p key={uuidv4()}>{`${elem.value} ${elem.unit}`}</p>
        ))}
      </div>
    );
  }

  return null;
}

/**
 * The legend's style parameters
 * @type {object}
 */
const legendStyle = {
  color: '#74798C',
  fontSize: '.875em',
};

/**
 * Customize legend text
 *
 * @param {String} value The legend element text
 * @returns {Node} Custom node element
 */
const customLegendText = (value) => <span style={legendStyle}>{value}</span>;

/**
 * Customize X axis ticks label
 *
 * @param {String} item Tick label value
 * @param {Number} i Tick index
 * @returns {String} Custom tick label
 */
const customXTickFormatter = (_, i) => `${i + 1}`;

/**
 * Component displaying the Daily Activity chart (bar).
 * @component
 * @example
 * const userID = 12;
 * return (
 *  <DailyActivity userID={userID} />
 * )
 */
export default function DailyActivity({ userID }) {
  const { apiUserDailyActivity, isLoading } = useApiUserDailyActivity(userID);

  return (
    <div className={style.dailyActivity}>
      {
        isLoading ? (
          <Loader />
        ) : (
          <>
            <p className={style.chartTitle}>Activité quotidienne</p>
            <ResponsiveContainer width="100%" height={272}>
              <BarChart
                data={apiUserDailyActivity}
              >
                <XAxis
                  dataKey="day"
                  tickLine={false}
                  tick={{ fill: '#9B9EAC' }}
                  tickFormatter={customXTickFormatter}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  dataKey="kilogram"
                  tick={{ fill: '#9B9EAC' }}
                  tickCount="3"
                  axisLine={false}
                  tickLine={false}
                  domain={['dataMin - 2', 'dataMax + 5']}
                />
                <YAxis
                  yAxisId="left"
                  orientation="left"
                  dataKey="calories"
                  hide
                />
                <CartesianGrid
                  vertical={false}
                  strokeDasharray="3"
                />
                <Tooltip
                  content={<CustomTooltip />}
                  wrapperStyle={{ outline: 'none' }}
                  cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }}
                />
                <Legend
                  formatter={customLegendText}
                  align="right"
                  height={60}
                  verticalAlign="top"
                  iconType="circle"
                  iconSize={8}
                />
                <Bar
                  yAxisId="right"
                  dataKey="kilogram"
                  name="Poids (kg)"
                  fill="#282D30"
                  barSize={7}
                  unit="kg"
                  radius={[10, 10, 0, 0]}
                />
                <Bar
                  yAxisId="left"
                  dataKey="calories"
                  name="Calories brûlées (kCal)"
                  fill="#E60000"
                  barSize={7}
                  unit="kCal"
                  radius={[10, 10, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </>
        )
      }
    </div>
  );
}

DailyActivity.propTypes = {
  userID: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.shape),
};

CustomTooltip.defaultProps = {
  active: false,
  payload: [],
};
