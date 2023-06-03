import axios, { AxiosRequestConfig } from "axios";

export type FetchResponse<T> = {
  count: number;
  next: string;
  previous: string;
  results: T[];
};

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "12c647da719b415e9a9f1bf95fece432",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config);
  };

  getOne = (id: number, config?: AxiosRequestConfig) => {
    return axiosInstance.get<T>(this.endpoint + "/" + id, config);
  };
}

export default APIClient;
