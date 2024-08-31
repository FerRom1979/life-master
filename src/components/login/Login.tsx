"use client";
import { useAppSelector } from "@/store";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { mockUser } from "../../mock-data/user";
import Button from "../button";
import Input from "../input";
import WrapperForm from "../wrapperForm";
import { schema } from "./schema";
import { IFormLogin } from "./types";

function Login() {
  const { user } = useAppSelector((state) => state.user);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    defaultValues: { email: "", password: "" },
  });
  const onSubmit: SubmitHandler<IFormLogin> = (data) => {
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
        }
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <WrapperForm title="LM">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <h2 className="mb-4 text-center text-[28px] font-bold text-slate-600">Login</h2>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input {...field} placeholder="email" id="email" message={errors.email?.message} />}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="password"
              type="password"
              id="password"
              message={errors.password?.message}
              isPassword
            />
          )}
        />
        <div className="ml-2 mt-2 text-mediumGray">
          Don&apos;t have an account?{" "}
          <Link href={"/register"} className="font-bold text-calmBlue">
            Sign up
          </Link>
        </div>
        <div className="mt-4 flex w-full justify-center">
          <Button label="Send" type="submit" loading={isLoading} />
        </div>
      </form>
    </WrapperForm>
  );
}

export default Login;
