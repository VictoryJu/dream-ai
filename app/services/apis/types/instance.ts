export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface ApiClientOptions extends Omit<RequestInit, 'method'> {
  method?: HttpMethod;
  baseUrl?: string;
  params?: Record<string, string>;
}

export interface ApiErrorData {
  message: string;
  [key: string]: unknown;
}

export class ApiError extends Error {
  status: number;
  data: ApiErrorData;

  constructor(message: string, status: number, data: ApiErrorData) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

export interface ApiResponse<T> {
  message: string;
  data?: T;
  errors?: {
    message: string;
  };
}
