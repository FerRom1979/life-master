"use client";
import { useAuth } from "@/hooks/useAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import WrapperForm from "../../layout/wrapperForm";
import Button from "../../ui/button";
import Input from "../../ui/input";
import { schema } from "./schema";
import { IFormLogin } from "./types";

function Login() {
  const { handleLogin, isLoading } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    defaultValues: { email: "", password: "" },
  });
  const onSubmit: SubmitHandler<IFormLogin> = (data) => {
    handleLogin(data);
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
