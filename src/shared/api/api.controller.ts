import { AxiosRequestHeaders, AxiosResponse } from 'axios';

import $api from './api.configuration';

export class ApiController {
  static getApiCall = async <T>(url: string, headers?: AxiosRequestHeaders) => {
    return await $api.get<T>(url, { headers }).then((response) => response);
  };

  static postApiCall = async <TypeRequest, TypeResponse>(
    url: string,
    data: TypeRequest,
    headers?: AxiosRequestHeaders,
  ): Promise<AxiosResponse<TypeResponse>> => {
    return await $api.post<TypeResponse>(url, data, { headers });
  };
}
