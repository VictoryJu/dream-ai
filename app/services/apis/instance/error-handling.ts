import { ApiError } from '../types/instance';

export async function withErrorHandling<T>(apiFunction: () => Promise<T>): Promise<T> {
  try {
    return await apiFunction();
  } catch (error) {
    if (error instanceof ApiError) {
      throw new Error(error.message);
    }
    throw new ApiError('An unknown error occurred', 500, { message: 'Unknown error' });
  }
}
