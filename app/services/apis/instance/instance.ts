import { ApiClientOptions, ApiError, ApiResponse } from '../types/instance';

const apiClient = async <T>(url: string, options: ApiClientOptions = {}): Promise<T> => {
  const { baseUrl = '/api', params, ...fetchOptions } = options;

  const queryParams = params ? '?' + new URLSearchParams(params).toString() : '';

  const fullUrl = `${baseUrl}${url}${queryParams}`;

  try {
    const response: Response = await fetch(fullUrl, {
      ...fetchOptions,
      headers: {
        'Content-Type': 'application/json',
        ...fetchOptions.headers,
      },
    });

    console.log(response);
    // const responseData: ApiResponse<T> = (await response.json());
    const responseData = { data: await response, message: '', errors: { message: '' } };

    if (!response.ok || responseData.message === 'FAILURE') {
      throw new ApiError(responseData.errors?.message || 'API request failed', response.status, {
        message: responseData.errors?.message || 'Unknown error',
      });
    }

    return { data: responseData, message: 'SUCCESS' } as T;
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
