import { ReactNode } from 'react';
import { create } from 'zustand';

interface ModalStore {
  isOpen: boolean;
  content: ReactNode | null;
  open: (content: ReactNode) => void;
  onClose: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  content: null,
  open: (content: ReactNode) => {
    document.body.style.overflow = 'hidden';
    set({ isOpen: true, content });
  },
  onClose: () => {
    document.body.style.overflow = 'unset';
    set({ isOpen: false, content: null });
  },
}));
