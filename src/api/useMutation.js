import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "../zustand/auth/auth";
import {
  addContact,
  deleteContact,
  fetchContact,
  login,
  refresh,
  register,
  setAuthHedar,
} from "./auth";

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

  if (token) {
    setAuthHedar(token);
  }

  return useMutation({
    mutationFn: refresh,
    onSuccess: (data) => {
      if (data) {
        setUser(data);
      }
    },
  });
};

export const useFetchContacts = () => {
  return useQuery({ queryKey: ["contacts"], queryFn: fetchContact });
};

export const useAddContact = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });
};

export const useDeleteContact = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });
};
