import React from 'react';
import Layout from '../Layout';
import Loader from '../Loader';
import useAxios from '../../hooks/useAxios';
import style from './style.module.scss';
import DailyActivity from '../DailyActivity';
import HighlightData from '../HighlightData';
import firePicto from '../../assets/images/fire.svg';
import meatPicto from '../../assets/images/meat.svg';
import fruitPicto from '../../assets/images/fruit.svg';
import burgerPicto from '../../assets/images/burger.svg';

function App() {
  const userID = 12;
  const { apiData, isLoading } = useAxios(`http://localhost:3000/user/${userID}`);

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
                <div className={style.firstname}>{apiData.data.userInfos.firstName}</div>
              </div>
              <div className={style.welcomeMessage}>
                Félicitation ! Vous avez explosé vos objectifs hier 👏
              </div>
            </div>

            <div className={style.informations}>
              <div className={style.charts}>
                <DailyActivity userID={userID} />
              </div>
              <div className={style.keys}>
                <HighlightData mainData={`${apiData.data.keyData.calorieCount}kCal`} label="Calories" icon={firePicto} />
                <HighlightData mainData={`${apiData.data.keyData.proteinCount}g`} label="Protéines" theme="blue" icon={meatPicto} />
                <HighlightData mainData={`${apiData.data.keyData.carbohydrateCount}g`} label="Glucides" theme="yellow" icon={fruitPicto} />
                <HighlightData mainData={`${apiData.data.keyData.lipidCount}g`} label="Glucides" theme="pink" icon={burgerPicto} />
              </div>
            </div>
          </main>
        )
      }
    </Layout>
  );
}

export default App;
