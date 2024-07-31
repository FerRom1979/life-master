"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function HomePage() {
  const user = false;
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/register");
    }
  }, [user]);

  return <div className="text-red">HomePage</div>;
}

export default HomePage;
