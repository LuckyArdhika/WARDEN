const baseUrl = {
  development: "http://localhost:3001", // local, development is nextjs standard
  dev: "https://klaien.com",
  debug: "https://klaien.com",
  stag: "https://klaien.com",
  prod: "https://klaien/com"
};

export const request = async (input: RequestInfo | URL, init?: RequestInit | undefined, options?: {useConfig: boolean, useBaseUrl: boolean}) => { // {useConfig: boolean, useBaseUrl: boolean}

  const url = options?.useBaseUrl == false ? input : baseUrl[process.env.NODE_ENV as keyof typeof baseUrl];
  const defaultInit: RequestInit = {
    credentials: "include",
    cache: "default",
    ...init
  }
  const config = options?.useConfig == false ? init : defaultInit;

  const response = await fetch(url, config);

  // handling global error
  if (!response.ok && response.status === 401) {
    // 401 error handling
    return Promise.reject(response);
  }

  return response;
};