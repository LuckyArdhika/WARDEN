import { useEffect, useState } from "react";
import { request } from "./fetch.config";

export const useHookFetcher = (url: string, requestInit?: RequestInit, options?: {useConfig: boolean, useBaseUrl: boolean}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState<null | Error>(null);

  useEffect(() => {
    setIsLoading(true);
    request(url, requestInit, options)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(err => setError(err));
  }, []);

  return { data, isLoading, error };
}