import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
interface AuthStore {
  tel: string;
  setTel: (tel: string) => void;
}

export const authStore = create<AuthStore>()(
  persist(
    (set) => ({
      tel: '',
      setTel: (tel: string) => set({ tel }),
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
