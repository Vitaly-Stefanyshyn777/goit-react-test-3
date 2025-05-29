import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      user: null,
      isLoggedIn: false,

      setAuth: ({ token, user }) => set({ token, user, isLoggedIn: true }),

      logout: () => set({ token: null, user: null, isLoggedIn: false }),
    }),
    {
      name: "auth-storage", // 🔑 ключ у localStorage
      partialize: (state) => ({
        token: state.token,
      }),
    }
  )
);
