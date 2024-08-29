"use client";
import { useRouter } from "next/router";
import React from "react";

import Login from "@/components/login";
import SignUp from "@/components/sign-up";

function Register() {
  const router = useRouter();
  const { path } = router.query;
  const isSignIn = path === "signin";

  return <div>{isSignIn ? <Login /> : <SignUp />}</div>;
}

export default Register;