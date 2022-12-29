import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';

/**
 * Component displaying a card with a pictogram and data side by side.
 * @component
 * @example
 * const mainData = '1950kCal';
 * const label = 'Calories';
 * const theme = 'red';
 * const icon = '../path/to/assets/icon.svg';
 * return (
 *  <HighlightData mainData={mainData} label={label} theme={theme} icon={icon} />
 * )
 */
export default function HighlightData({
  mainData, label, theme, icon,
}) {
  return (
    <div className={style.highlightData}>
      <div className={style.imageWrapper} data-theme={theme}>
        <img src={icon} alt="" />
      </div>
      <div className={style.content}>
        <div className={style.mainData}>{mainData}</div>
        <div className={style.label}>{label}</div>
      </div>
    </div>
  );
}

HighlightData.propTypes = {
  mainData: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['red', 'blue', 'yellow', 'pink']),
  icon: PropTypes.string.isRequired,
};

HighlightData.defaultProps = {
  theme: 'red',
};
