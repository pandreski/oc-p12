import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  PolarAngleAxis,
  PolarGrid, Radar, RadarChart, ResponsiveContainer,
} from 'recharts';
import Loader from '../Loader';
import { useApiUserActivityTypes } from '../../hooks/useApi';
import style from './style.module.scss';

export default function CategoryChart({ userID }) {
  const { apiUserActivityTypes, isLoading } = useApiUserActivityTypes(userID);
  const [mappedData, setData] = useState([]);
  const kindTranslate = {
    cardio: 'Cardio',
    energy: 'Energie',
    endurance: 'Endurance',
    strength: 'Force',
    speed: 'Vitesse',
    intensity: 'Intensité',
  };

  useEffect(() => {
    if (!Object.keys(apiUserActivityTypes).length) return;
    async function getMap() {
      try {
        const dataLoaded = await apiUserActivityTypes;
        let categoriesArray = Object.values(dataLoaded.kind);
        categoriesArray = categoriesArray.map((elem) => elem);
        const fullData = dataLoaded.data.map((elem) => (
          { ...elem, cat: kindTranslate[categoriesArray[elem.kind - 1]] }
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
        ) : mappedData && (
          <ResponsiveContainer width="100%" height={200}>
            <RadarChart data={mappedData}>
              <PolarGrid />
              <PolarAngleAxis
                dataKey="cat"
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
