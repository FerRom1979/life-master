"use client";
import { useRouter } from "next/router";
import React from "react";

import Login from "@/components/form/login";
import SignUp from "@/components/form/sign-up";

function Register() {
  const router = useRouter();
  const { path } = router.query;
  const isSignIn = path === "login";

  return <div>{isSignIn ? <Login /> : <SignUp />}</div>;
}

export default Register;
