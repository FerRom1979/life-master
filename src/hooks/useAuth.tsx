import { messages } from "@/constants/messages";
import { mockUser } from "@/mock-data";
import { useAppSelector } from "@/store";
import { setMessage } from "@/store/reducers/messages";
import { setUser } from "@/store/reducers/user";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { IFormLogin } from "@/components/form/login/types";
import { IFormSingUp } from "@/components/form/sign-up/types";

export const useAuth = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    error: { login, singUp },
  } = messages;

  const handleLogin = async (data: IFormLogin) => {
    try {
      setIsLoading(true);
      const { email, password } = data;
      setTimeout(() => {
        setIsLoading(false);
        if (
          (email === user?.email && password === user?.password) ||
          (email === mockUser.user?.email && password === mockUser.user?.password)
        ) {
          return router.push("/dashboard");
        } else {
          dispatch(setMessage({ type: "error", message: login.authentication }));
        }
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  const handleSingUp = async (data: IFormSingUp) => {
    try {
      setIsLoading(true);
      const { email, password, name } = data;
      const newUser = { email, password, name, id: new Date().getMilliseconds() };
      setTimeout(() => {
        setIsLoading(false);
        if (email === mockUser.user.email) {
          dispatch(setMessage({ type: "error", message: singUp.registeredEmail }));
          return;
        }
        dispatch(setUser(newUser));
        router.push("./register?path=login");
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  return { handleLogin, isLoading, handleSingUp };
};
