import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../zustand/auth/auth";
import { login, refresh, register, setAuthHedar } from "./auth";

export const useLogin = () => {
  const { setAuth } = useAuthStore();
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setAuth(data);
      setAuthHedar(data.token);
    },
  });
};

export const useRegister = () => {
  const { setAuth } = useAuthStore();
  return useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      setAuth(data);
      setAuthHedar(data.token);
    },
  });
};

export const useRefresh = () => {
  const { token, setUser } = useAuthStore();

  setAuthHedar(token);
  return useMutation({
    mutationFn: token ? refresh : () => {},
    onSuccess: (data) => {
      console.log(data);
      setUser(data ? data : null);
    },
  });
};
