import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ActivityModel, AverageSessionsModel, GeneralModel, PerformanceModel,
} from '../utils/models';

/**
 * Should we use mocked data?
 * @type {boolean}
 */
const isMocked = !!+process.env.REACT_APP_MOCKED_DATA;

/**
 * The API port number.
 * @type {string}
 */
const apiPort = process.env.REACT_APP_BACKEND_PORT;

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
        const url = isMocked ? '/__mocks__/general.json' : `http://localhost:${apiPort}/user/${uid}`;
        const { data } = await axios.get(url);

        const model = new GeneralModel(data.data);

        setData(model.getUserInfos);
      } catch (error) {
        if (error.response) {
          // The client was given an error response (5xx, 4xx)
          navigate('/user/not-found');
        } else {
          // Anything else
          navigate('/api-error');
        }
        console.error('Error: ', error.message);
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
        const url = isMocked ? '/__mocks__/general.json' : `http://localhost:${apiPort}/user/${uid}`;
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
        const url = isMocked ? '/__mocks__/general.json' : `http://localhost:${apiPort}/user/${uid}`;
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
        const url = isMocked ? '/__mocks__/activity.json' : `http://localhost:${apiPort}/user/${uid}/activity`;
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
 * Get user's activity types (categories).
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
        const url = isMocked ? '/__mocks__/performance.json' : `http://localhost:${apiPort}/user/${uid}/performance`;
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
        const url = isMocked ? '/__mocks__/average-sessions.json' : `http://localhost:${apiPort}/user/${uid}/average-sessions`;
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
