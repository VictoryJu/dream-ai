import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { useState, useEffect } from 'react';

interface AuthState {
  globalTel: string;
  globalStoryId: number;
  setGlobalTel: (tel: string) => void;
  setGlobalStoryId: (id: number) => void;
}

const useAuthStoreBase = create<AuthState>()(
  persist(
    (set) => ({
      globalTel: '',
      globalStoryId: 0,
      setGlobalTel: (tel) => set({ globalTel: tel }),
      setGlobalStoryId: (id) => set({ globalStoryId: id }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export const useAuthStore = <T>(selector: (state: AuthState) => T) => {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  const store = useAuthStoreBase(selector);
  return hydrated
    ? store
    : selector({
        globalTel: '',
        globalStoryId: 0,
        setGlobalTel: () => {},
        setGlobalStoryId: () => {},
      });
};

export const getAuthState = () => useAuthStoreBase.getState();
