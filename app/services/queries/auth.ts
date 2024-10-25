import { useMutation } from '@tanstack/react-query';
import authApi from '../apis/auth';

export const useLogin = () => {
  return useMutation({
    mutationFn: authApi.login,
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: authApi.logout,
  });
};

export const useSignup = () => {
  return useMutation({
    mutationFn: authApi.signup,
  });
};

export const usePhoneVerification = (type: 'get' | 'post') => {
  const mutation = type === 'get' ? authApi.getPhoneVerification : authApi.postPhoneVerification;
  return useMutation({
    mutationFn: mutation,
  });
};
