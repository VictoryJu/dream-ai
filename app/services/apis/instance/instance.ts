import { getAuthState } from '@/lib/stores/auth-store';
import { ApiClientOptions, ApiError, ApiResponse } from '../types/instance';

interface CreateApiClientConfig {
  serverToken?: string;
}

const createApiClient = (config: CreateApiClientConfig = {}) => {
  const getBaseUrl = () => {
    if (typeof window === 'undefined') {
      return process.env.NEXT_PUBLIC_API_URL;
    }
    return '/api';
  };

  return async <T>(url: string, options: ApiClientOptions = {}): Promise<T> => {
    const { baseUrl = getBaseUrl(), params, ...fetchOptions } = options;

    const queryParams = params ? '?' + new URLSearchParams(params).toString() : '';
    const fullUrl = `${baseUrl}${url}${queryParams}`;
    const token = config.serverToken || getAuthState().accessToken;

    const headers = new Headers({
      'Content-Type': 'application/json',
      ...fetchOptions.headers,
    });

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    try {
      const response: Response = await fetch(fullUrl, {
        ...fetchOptions,
        headers,
        credentials: 'include',
      });
      console.log(response);

      const { data } = await response.json();
      const responseData: ApiResponse<T> = { data, message: 'SUCCESS', errors: { message: '' } };

      if (!response.ok || responseData.message === 'FAILURE') {
        console.error(responseData.errors?.message);
        throw new ApiError(responseData.errors?.message || 'API request failed', response.status, {
          message: responseData.errors?.message || 'Unknown error',
        });
      }

      return responseData as T;
    } catch (error) {
      if (error instanceof ApiError) {
        console.error(error.message);
        throw error;
      }
      if (error instanceof Error) {
        throw new ApiError(error.message, 500, { message: error.message });
      }
      throw new ApiError('An unknown error occurred', 500, { message: 'Unknown error' });
    }
  };
};

export default createApiClient;
