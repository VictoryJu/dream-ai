import createApiClient from './instance/instance';
import { ILoginRequest, ISignupRequest, LoginResponseType } from './types/auth';

const createAuthApi = (config?: { serverToken?: string }) => {
  const apiClient = createApiClient(config);

  return {
    login: ({ password, tel }: ILoginRequest): Promise<LoginResponseType> =>
      apiClient<LoginResponseType>('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ password, userName: tel }),
      }),

    logout: (): Promise<void> => apiClient<void>('/auth/logout'),

    signup: ({
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
      }),

    getPhoneVerification: (tel: string): Promise<LoginResponseType> =>
      apiClient<LoginResponseType>('/auth/phone-verifications', {
        method: 'POST',
        body: JSON.stringify({ userName: tel }),
      }),

    postPhoneVerification: (code: string): Promise<LoginResponseType> =>
      apiClient<LoginResponseType>('/auth/phone-verifications/verify', {
        method: 'POST',
        body: JSON.stringify({ code }),
      }),

    fetchProfile: (): Promise<LoginResponseType> => apiClient<LoginResponseType>('/auth/profile'),
  };
};

const authApi = createAuthApi();
export default authApi;

export const createServerAuthApi = (serverToken: string) => createAuthApi({ serverToken });
