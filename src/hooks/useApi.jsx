import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ActivityModel, AverageSessionsModel, GeneralModel, PerformanceModel,
} from '../utils/models';

// Get a boolean value of env variable
const isMocked = !!+process.env.REACT_APP_MOCKED_DATA;

/**
 * Get general user's information.
 *
 * @param {Number} uid User ID
 * @returns {Object}
 */
export function useApiUserInfo(uid) {
  const [apiUserInfo, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!uid) return;
    async function getData() {
      try {
        const url = isMocked ? '/__mocks__/general.json' : `http://localhost:3000/user/${uid}`;
        const { data } = await axios.get(url);

        const model = new GeneralModel(data.data);

        setData(model.getUserInfos);
      } catch (error) {
        navigate('/not-found');
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    setLoading(true);
    getData();
  }, []);

  return { apiUserInfo, isLoading };
}

/**
 * Get user's key data.
 *
 * @param {Number} uid User ID
 * @returns {Object}
 */
export function useApiKeyData(uid) {
  const [apiKeyData, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!uid) return;
    async function getData() {
      try {
        const url = isMocked ? '/__mocks__/general.json' : `http://localhost:3000/user/${uid}`;
        const { data } = await axios.get(url);

        const model = new GeneralModel(data.data);

        setData(model.getKeyData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    setLoading(true);
    getData();
  }, []);

  return { apiKeyData, isLoading };
}

/**
 * Get user's today score completion.
 *
 * @param {Number} uid User ID
 * @returns {Object}
 */
export function useApiUserScore(uid) {
  const [apiUserScore, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!uid) return;
    async function getData() {
      try {
        const url = isMocked ? '/__mocks__/general.json' : `http://localhost:3000/user/${uid}`;
        const { data } = await axios.get(url);

        const model = new GeneralModel(data.data);

        setData(model.getScore);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    setLoading(true);
    getData();
  }, []);

  return { apiUserScore, isLoading };
}

/**
 * Get user's daily activity.
 *
 * @param {Number} uid User ID
 * @returns {Object}
 */
export function useApiUserDailyActivity(uid) {
  const [apiUserDailyActivity, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!uid) return;
    async function getData() {
      try {
        const url = isMocked ? '/__mocks__/activity.json' : `http://localhost:3000/user/${uid}/activity`;
        const { data } = await axios.get(url);

        const model = new ActivityModel(data.data);

        setData(model.getSessions);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    setLoading(true);
    getData();
  }, []);

  return { apiUserDailyActivity, isLoading };
}

/**
 * Get user's activity types.
 *
 * @param {Number} uid User ID
 * @returns {Object}
 */
export function useApiUserActivityTypes(uid) {
  const [apiUserActivityTypes, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!uid) return;
    async function getData() {
      try {
        const url = isMocked ? '/__mocks__/performance.json' : `http://localhost:3000/user/${uid}/performance`;
        const { data } = await axios.get(url);

        const model = new PerformanceModel(data.data);

        setData(model.getPerformance);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    setLoading(true);
    getData();
  }, []);

  return { apiUserActivityTypes, isLoading };
}

/**
 * Get user's sessions average time.
 *
 * @param {Number} uid User ID
 * @returns {Object}
 */
export function useApiAverageSessions(uid) {
  const [apiAverageSessions, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!uid) return;
    async function getData() {
      try {
        const url = isMocked ? '/__mocks__/average-sessions.json' : `http://localhost:3000/user/${uid}/average-sessions`;
        const { data } = await axios.get(url);

        const model = new AverageSessionsModel(data.data);

        setData(model.getAverageSessions);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    setLoading(true);
    getData();
  }, []);

  return { apiAverageSessions, isLoading };
}
