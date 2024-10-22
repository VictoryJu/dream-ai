'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface AuthStates {
  storyId: number;
  accessToken: string;
}
interface AuthActions {
  setStoryId: (storyId: number) => void;
  setAccessToken: (accessToken: string) => void;
}

type AuthState = AuthStates & AuthActions;

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      storyId: 0,
      accessToken: '',
      setStoryId: (storyId) => set({ storyId }),
      setAccessToken: (accessToken) => set({ accessToken }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

// 스토어의 현재 상태를 가져오는 함수
export const getAuthState = () => useAuthStore.getState();

// 스토어를 리셋하는 함수 (로그아웃 시 유용)
export const resetAuthStore = () => useAuthStore.setState({ storyId: 0, accessToken: '' });
