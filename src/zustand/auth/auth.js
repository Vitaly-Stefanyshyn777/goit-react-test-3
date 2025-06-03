import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export const useAuthStore = create(
  devtools(
    persist(
      (set) => ({
        token: null,
        user: null,
        isLoggedIn: false,

        setAuth: ({ token, user }) => set({ token, user, isLoggedIn: true }),
        setUser: (user) => set({ user, isLoggedIn: true }),

        logout: () => set({ token: null, user: null, isLoggedIn: false }),
      }),
      {
        name: "auth-storage", // 🔑 ключ у localStorage
        partialize: (state) => ({
          token: state.token,
        }),
      }
    )
  )
);
