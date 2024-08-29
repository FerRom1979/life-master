"use client";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
// import "./globals.css";

function HomePage() {
  const user = false;
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/register");
    }
  }, [user]);

  return <div className="text-slate-400">HomePage</div>;
}

export default HomePage;
