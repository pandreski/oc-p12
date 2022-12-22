import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useAxios(url) {
  const [apiData, setApiData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!url) return;

    async function getData() {
      try {
        const { data } = await axios.get(url);
        setApiData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    setIsLoading(true);
    getData();
  }, [url]);

  return { apiData, isLoading };
}
