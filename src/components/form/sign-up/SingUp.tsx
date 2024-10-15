"use client";
import { useAuth } from "@/hooks/useAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import WrapperForm from "@/components/layout/wrapperForm";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

import { schema } from "./schema";
import { IFormSingUp } from "./types";

function SignUp() {
  const { handleSingUp, isLoading } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormSingUp>({
    resolver: yupResolver(schema),
    defaultValues: { email: "", name: "", password: "", confirmPassword: "" },
  });

  const onSubmit: SubmitHandler<IFormSingUp> = (data) => {
    handleSingUp(data);
  };

  return (
    <WrapperForm title="LM">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <h2 className="mb-4 text-center text-[28px] font-bold text-slate-600">Sign Up</h2>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input {...field} placeholder="email" id="email" message={errors.email?.message} />}
        />
        <Controller
          name="name"
          control={control}
          render={({ field }) => <Input {...field} placeholder="name" id="name" message={errors.name?.message} />}
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
        <div className="ml-2 mt-2 text-mediumGray">
          you have an account?{" "}
          <Link href={"/register?path=login"} className="font-bold text-calmBlue">
            Login
          </Link>
        </div>
        <div className="mt-4 flex w-full justify-center">
          <Button label="Send" type="submit" loading={isLoading} />
        </div>
      </form>
    </WrapperForm>
  );
}

export default SignUp;
