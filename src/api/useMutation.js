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

  setAuthHedar(token);
  return useMutation({
    mutationFn: token ? refresh : () => {},
    onSuccess: (data) => {
      if (data) {
        setUser(data);
      }
      // setUser(data ? data : null);
    },
  });
};

export const useFethContacts = () => {
  return useQuery({ queryKey: ["contacts"], queryFn: fetchContact });
};

export const useAddContact = () => {
  const queryCliqnt = useQueryClient();
  return useMutation({
    mutationFn: addContact,
    onSuccess: () => {
      queryCliqnt.invalidateQueries(["contacts"]);
    },
  });
};

export const useDeleteContact = () => {
  const queryCliqnt = useQueryClient();
  return useMutation({
    mutationFn: deleteContact,
    onSuccess: () => {
      queryCliqnt.invalidateQueries(["contacts"]);
    },
  });
};
