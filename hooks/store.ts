import { create } from 'zustand';

interface UsernameState {
  username: string | null;
  setUsername: (username: string) => void;
}

export const useUsernameStore = create<UsernameState>((set) => ({
  username: null,
  setUsername: (username) => set({ username }),
}));
