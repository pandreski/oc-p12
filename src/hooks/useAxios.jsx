import axios from 'axios';
import { useEffect, useState } from 'react';

/**
 * Get general user's information.
 *
 * @param {Number} uid User ID
 * @returns {Object}
 */
export function useApiUserInfo(uid) {
  const [apiUserInfo, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!uid) return;
    async function getData() {
      try {
        const { data } = await axios.get(`http://localhost:3000/user/${uid}`);
        const userInfos = await data.data.userInfos;
        setData(userInfos);
      } catch (error) {
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
        const { data } = await axios.get(`http://localhost:3000/user/${uid}`);
        const keyData = await data.data.keyData;
        setData(keyData);
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
        const { data } = await axios.get(`http://localhost:3000/user/${uid}`);
        const userScore = await data.data.todayScore;
        setData(userScore);
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
        const { data } = await axios.get(`http://localhost:3000/user/${uid}/activity`);
        const userDailyActivity = await data.data;
        setData(userDailyActivity);
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
        const { data } = await axios.get(`http://localhost:3000/user/${uid}/performance`);
        const userActivityTypes = await data.data;
        setData(userActivityTypes);
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
