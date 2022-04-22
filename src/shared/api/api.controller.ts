import { AxiosResponse } from 'axios';
import $api from './api.configarion';

export class ApiController {
  // TODO: создать класс generic
  static getApiCall = async (url, headers = {}) => {
    return await $api.get(url, { headers }).then((response) => response);
  };

  static postApiCall = async (
    url,
    headers = {},
    data,
  ): Promise<AxiosResponse> => {
    // TODO: дописать тип дженириком  Promise<AxiosResponse<T>>
    return await $api.post(url, { headers }, { data });
  };
}
