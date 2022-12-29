import React from 'react';
import PropTypes from 'prop-types';
import {
  Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import style from './style.module.scss';
import { useApiAverageSessions } from '../../hooks/useApi';
import Loader from '../Loader';

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
        {`${payload[0].value} min`}
      </div>
    );
  }
  return null;
}

/**
 * Component displaying the Average Sessions chart (area).
 * @component
 * @example
 * const userID = 12;
 * return (
 *  <AverageSessions userID={userID} />
 * )
 */
export default function AverageSessions({ userID }) {
  const { apiAverageSessions, isLoading } = useApiAverageSessions(userID);
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const customTickFormat = (value) => days[value - 1];

  return (
    isLoading ? (
      <Loader />
    ) : (
      <div className={style.avgSession}>
        <p className={style.chartTitle}>Durée moyenne des sessions</p>
        <ResponsiveContainer width="100%" height={185}>
          <AreaChart
            data={apiAverageSessions}
          >
            <defs>
              <linearGradient id="lineColor">
                <stop offset="0%" stopColor="#fff" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#fff" stopOpacity={1} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              domain={['dataMin', 'dataMax']}
              tickFormatter={customTickFormat}
              tick={{ fill: 'rgba(255,255,255,0.5)' }}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis hide />
            <Tooltip
              cursor={false}
              content={<CustomTooltip />}
              wrapperStyle={{ outline: 'none' }}
            />
            <Area
              dataKey="sessionLength"
              type="monotone"
              stroke="url(#lineColor)"
              fill="none"
              activeDot={{ fill: '#fff', r: 4 }}
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  );
}

AverageSessions.propTypes = {
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
