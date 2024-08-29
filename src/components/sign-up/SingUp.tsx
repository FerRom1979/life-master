"use client";
import { setUser } from "@/store/reducers/user";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";

import Button from "../button";
import Input from "../input";
import { schema } from "./schema";
import { IFormSingUp } from "./types";

function SignUp() {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormSingUp>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<IFormSingUp> = (data) => {
    const { email, password, name } = data;
    const newUser = { email, password, name, id: new Date().getMilliseconds() };
    dispatch(setUser(newUser));
    router.push("./register?path=signin");
  };

  return (
    <div className="flex h-screen items-center justify-center px-6">
      <div className="flex w-96 max-w-[800px] flex-col items-center justify-center rounded-lg bg-white px-5 py-10 shadow-lg">
        <div className="mb-4 flex h-[60px] w-[60px] items-center justify-center rounded bg-black">
          <h2 className="text-body-lg font-bold text-white">LM</h2>
        </div>
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
            <Link href={"/register?path=singin"} className="font-bold text-calmBlue">
              Login
            </Link>
          </div>
          <div className="mt-4 flex w-full justify-center">
            <Button label="Send" type="submit" disabled={!isValid} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
