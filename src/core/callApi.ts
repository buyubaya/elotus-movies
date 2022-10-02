import { getAPIAccessToken } from './getAPIAccessToken';

export interface RequestOptions extends RequestInit {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
}

export const callApi = async (
  rawUrl: string,
  options: RequestOptions = {},
  parentRequest?: RequestInit
): Promise<Response> => {
  const accessToken = getAPIAccessToken() || '';
  const url = `${rawUrl}${rawUrl?.indexOf('?') === -1 ? '?' : '&'}api_key=${accessToken}`;

  const requestOptions: RequestOptions = {
    method: 'GET',
    ...options,
  };

  let headers: HeadersInit & {
    Authorization?: string;
    Accept?: string;
    'Content-Type'?: string;
  };

  if (parentRequest) {
    headers = {
      ...parentRequest.headers,
      ...requestOptions.headers,
    };
  } else {
    headers = {
      ...requestOptions.headers,
    };
  }

  if (!headers.Accept) {
    headers.Accept = 'application/json';
  }

  if (!headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  requestOptions.headers = headers;

  const result = await fetch(url, requestOptions);

  return result;
};
