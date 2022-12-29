import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useApiKeyData, useApiUserInfo } from '../../hooks/useApi';
import Loader from '../../components/Loader';
import DailyActivity from '../../components/DailyActivity';
import HighlightData from '../../components/HighlightData';
import firePicto from '../../assets/images/fire.svg';
import meatPicto from '../../assets/images/meat.svg';
import fruitPicto from '../../assets/images/fruit.svg';
import burgerPicto from '../../assets/images/burger.svg';
import TargetScore from '../../components/TargetScore';
import CategoryChart from '../../components/CategoryChart';
import style from './style.module.scss';
import AverageSessions from '../../components/AverageSessions';

/**
 * Component displaying a list of several HighlightData components.
 * @component
 * @example
 * const userID = 12;
 * return (
 *  <KeyDataList userID={userID} />
 * )
 */
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
        <HighlightData mainData={`${apiKeyData.lipidCount}g`} label="Lipides" theme="pink" icon={burgerPicto} />
      </>
    )
  );
}

/**
 * Component displaying the dashboard page.
 * @component
 * @example
 * return (
 *  <Dashboard />
 * )
 */
export default function Dashboard() {
  const { uid } = useParams();
  const { apiUserInfo, isLoading } = useApiUserInfo(uid);

  return (
    isLoading ? (
      <Loader />
    ) : (
      <>
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
            <DailyActivity userID={uid} />
            <div className={style.chartsGroup}>
              <AverageSessions userID={uid} />
              <CategoryChart userID={uid} />
              <TargetScore userID={uid} />
            </div>
          </div>
          <div className={style.keys}>
            <KeyDataList userID={uid} />
          </div>
        </div>
      </>
    )
  );
}

KeyDataList.propTypes = {
  userID: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};
