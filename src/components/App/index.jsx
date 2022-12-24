import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout';
import Loader from '../Loader';
import { useApiKeyData, useApiUserInfo } from '../../hooks/useAxios';
import DailyActivity from '../DailyActivity';
import HighlightData from '../HighlightData';
import firePicto from '../../assets/images/fire.svg';
import meatPicto from '../../assets/images/meat.svg';
import fruitPicto from '../../assets/images/fruit.svg';
import burgerPicto from '../../assets/images/burger.svg';
import TargetScore from '../TargetScore';
import CategoryChart from '../CategoryChart';
import style from './style.module.scss';

function KeyDataList({ userID }) {
  const { apiKeyData, isLoading } = useApiKeyData(userID);

  return (
    isLoading ? (
      <Loader />
    ) : (
      <>
        <HighlightData mainData={`${apiKeyData.calorieCount}kCal`} label="Calories" icon={firePicto} />
        <HighlightData mainData={`${apiKeyData.proteinCount}g`} label="Protéines" theme="blue" icon={meatPicto} />
        <HighlightData mainData={`${apiKeyData.carbohydrateCount}g`} label="Glucides" theme="yellow" icon={fruitPicto} />
        <HighlightData mainData={`${apiKeyData.lipidCount}g`} label="Glucides" theme="pink" icon={burgerPicto} />
      </>
    )
  );
}

export default function App() {
  const userID = process.env.REACT_APP_UID;
  const { apiUserInfo, isLoading } = useApiUserInfo(userID);

  return (
    <Layout>
      {
        isLoading ? (
          <Loader />
        ) : (
          <main>
            <div className={style.intro}>
              <div className={style.user}>
                Bonjour
                {' '}
                <div className={style.firstname}>{apiUserInfo.firstName}</div>
              </div>
              <div className={style.welcomeMessage}>
                Félicitation ! Vous avez explosé vos objectifs hier 👏
              </div>
            </div>

            <div className={style.informations}>
              <div className={style.charts}>
                <DailyActivity userID={userID} />
                <div className={style.chartsGroup}>
                  <CategoryChart userID={userID} />
                  <TargetScore userID={userID} />
                </div>
              </div>
              <div className={style.keys}>
                <KeyDataList userID={userID} />
              </div>
            </div>
          </main>
        )
      }
    </Layout>
  );
}

KeyDataList.propTypes = {
  userID: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};
