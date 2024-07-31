"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import Button from "../button";
import Input from "../input";
import { schema } from "./schema";
import { IFormSingUp } from "./types";

function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormSingUp>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<IFormSingUp> = (data) => console.log(data);

  return (
    <div className="mt-20 flex h-screen items-center justify-center px-6">
      <div className="flex w-96 max-w-[800px] flex-col items-center justify-center rounded-lg bg-white px-5 py-10 shadow-lg">
        <div className="mb-4 flex h-[60px] w-[60px] items-center justify-center rounded bg-black">
          <h2 className="text-body-lg font-bold text-white">LM</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <h2 className="mb-4 text-center text-[28px] font-bold text-slate-600">
            Sign Up
          </h2>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="email"
                id="email"
                message={errors.email?.message}
              />
            )}
          />
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="name"
                id="name"
                message={errors.name?.message}
              />
            )}
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
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="confirm password"
                type="password"
                id="confirmPassword"
                message={errors.confirmPassword?.message}
                isPassword
              />
            )}
          />
          <div className="mt-4 flex w-full justify-center">
            <Button label="Send" type="submit" disabled={!isValid} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
