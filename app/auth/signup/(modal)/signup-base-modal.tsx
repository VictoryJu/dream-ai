'use client';
import { useModalStore } from '@/lib/stores/modal-store';
import { useEffect } from 'react';

export const SignupBaseModal = () => {
  const { isOpen, content } = useModalStore();

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return isOpen && <>{content}</>;
};
