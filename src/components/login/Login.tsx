"use client";
import { useAppSelector } from "@/store";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import Button from "../button";
import Input from "../input";
import { schema } from "./schema";
import { IFormLogin } from "./types";

function Login() {
  const { user } = useAppSelector((state) => state.user);
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<IFormLogin> = (data) => {
    const { email, password } = data;
    if (email === user?.email && password === user?.password) {
      return router.push("/dashboard");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center px-6">
      <div className="flex w-96 max-w-[800px] flex-col items-center justify-center rounded-lg bg-white px-5 py-10 shadow-lg">
        <div className="mb-4 flex h-[60px] w-[60px] items-center justify-center rounded bg-black">
          <h2 className="text-body-lg font-bold text-white">LM</h2>
        </div>
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
            <Button label="Send" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
