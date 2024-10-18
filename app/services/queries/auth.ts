import { useMutation } from '@tanstack/react-query';
import { getPhoneVerification, login, logout, postPhoneVerification, signup } from '../apis/auth';

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: logout,
  });
};

export const useSignup = () => {
  return useMutation({
    mutationFn: signup,
  });
};

export const usePhoneVerification = (type: 'get' | 'post') => {
  const mutation = type === 'get' ? getPhoneVerification : postPhoneVerification;
  return useMutation({
    mutationFn: mutation,
  });
};
