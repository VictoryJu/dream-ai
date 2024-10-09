import { useMutation } from '@tanstack/react-query';
import { getPhoneVerification, postPhoneVerification, signup } from '../apis/auth';

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
