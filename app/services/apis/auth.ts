import { ILoginRequest, ISignupRequest, LoginResponseType } from './types/auth';
import apiClient from './instance/instance';

export const login = ({ password, tel }: ILoginRequest): Promise<LoginResponseType> =>
  apiClient<LoginResponseType>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ password, tel }),
  });

export const logout = (): Promise<void> => apiClient<void>('/auth/logout');

export const signup = ({
  userId,
  userName,
  password,
  realName,
  tel,
  userRole,
  storyId,
}: ISignupRequest): Promise<LoginResponseType> =>
  apiClient<LoginResponseType>('/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ userId, userName, password, realName, tel, userRole, storyId }),
  });

export const fetchProfile = (): Promise<LoginResponseType> => apiClient<LoginResponseType>('/auth/profile');
