import React from 'react';
import Layout from '../Layout';
import Loader from '../Loader';
import useAxios from '../../hooks/useAxios';
import style from './style.module.scss';
import DailyActivity from '../DailyActivity';

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
              <DailyActivity userID={userID} />
            </div>
          </main>
        )
      }
    </Layout>
  );
}

export default App;
