import { callApi } from '../base/apiDriver';
interface callApiProps {
  url: string;
  params?: object;
  data?: object;
  customHeaders?: object;
}
export const callApiGet = ({ url, params = {}, customHeaders = {} }: callApiProps) =>
  callApi({
    url,
    options: {
      method: 'GET',
      params,
    },
    customHeaders,
  });

export const callApiPost = ({ url, data, customHeaders = {} }: callApiProps) =>
  callApi({
    url,
    options: {
      method: 'POST',
      data: data,
    },
    customHeaders,
  });

export const callApiPut = ({ url, data = {}, customHeaders = {} }: callApiProps) =>
  callApi({
    url,
    options: {
      method: 'PUT',
      data: data,
    },
    customHeaders,
  });

export const callApiDelete = ({ url, customHeaders }: callApiProps) =>
  callApi({ url, options: { method: 'DELETE' }, customHeaders });
