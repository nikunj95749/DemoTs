import axios from 'axios';

interface callApiProps {
  url: string;
  options?: object;
  customHeaders?: object;
}

export const callApi = async ({url = '', options = {}, customHeaders = {}}:callApiProps) => {
  return axios.request({
    url,
    headers: {
      ...customHeaders,
    },
    ...options,
  });
};
