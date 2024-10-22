import { getAuthState } from '@/lib/stores/auth-store';
import { ApiClientOptions, ApiError, ApiResponse } from '../types/instance';

const apiClient = async <T>(url: string, options: ApiClientOptions = {}): Promise<T> => {
  const { baseUrl = '/api', params, ...fetchOptions } = options;

  const queryParams = params ? '?' + new URLSearchParams(params).toString() : '';

  const fullUrl = `${baseUrl}${url}${queryParams}`;

  const token = getAuthState().accessToken;

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

    const { data } = await response.json();

    const responseData: ApiResponse<T> = { data, message: 'SUCCESS', errors: { message: '' } };

    if (!response.ok || responseData.message === 'FAILURE') {
      throw new ApiError(responseData.errors?.message || 'API request failed', response.status, {
        message: responseData.errors?.message || 'Unknown error',
      });
    }

    return responseData as T;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new ApiError(error.message, 500, { message: error.message });
    }
    throw new ApiError('An unknown error occurred', 500, { message: 'Unknown error' });
  }
};

export default apiClient;
