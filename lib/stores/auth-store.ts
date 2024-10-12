import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
interface AuthStore {
  globalTel: string;
  setGlobalTel: (tel: string) => void;
}

export const authStore = create<AuthStore>()(
  persist(
    (set) => ({
      globalTel: '',
      setGlobalTel: (tel: string) => set({ globalTel: tel }),
    }),
    {
      name: 'auth-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
