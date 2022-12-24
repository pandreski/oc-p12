import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  PolarAngleAxis,
  PolarGrid, Radar, RadarChart, ResponsiveContainer,
} from 'recharts';
import Loader from '../Loader';
import { useApiUserActivityTypes } from '../../hooks/useAxios';
import style from './style.module.scss';

/**
 * Capitalize first letter of a string.
 *
 * @param {String} elem Lowercase string
 * @returns {String} Capitalized string
 */
function capitalizeFirstLetter(elem) {
  return elem.charAt(0).toUpperCase() + elem.slice(1);
}

export default function CategoryChart({ userID }) {
  const { apiUserActivityTypes, isLoading } = useApiUserActivityTypes(userID);
  const [mappedData, setData] = useState([]);

  useEffect(() => {
    if (!Object.keys(apiUserActivityTypes).length) return;
    async function getMap() {
      try {
        const dataLoaded = await apiUserActivityTypes;
        let categoriesArray = Object.values(dataLoaded.kind);
        categoriesArray = categoriesArray.map((elem) => capitalizeFirstLetter(elem));
        const fullData = dataLoaded.data.map((elem) => (
          { ...elem, cat: categoriesArray[elem.kind - 1] }
        ));

        setData(fullData);
      } catch (err) {
        console.error(err);
      }
    }
    getMap();
  }, [apiUserActivityTypes]);

  return (
    <div className={style.categoryChart}>
      {
        isLoading ? (
          <Loader />
        ) : (
          <ResponsiveContainer width="100%" height={200}>
            <RadarChart data={mappedData}>
              <PolarGrid tick={{ stroke: '#00f' }} />
              <PolarAngleAxis dataKey="cat" tick={{ fill: '#ffffff', fontSize: 12 }} />
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
