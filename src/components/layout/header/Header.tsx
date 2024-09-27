import { useAppSelector } from "@/store";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Header() {
  const { user } = useAppSelector((state) => state.user);
  const { push, pathname } = useRouter();
  const isUser = pathname !== "/register" && user;

  useEffect(() => {
    if (!user) {
      push("/register");
    }
  }, [isUser]);

  return (
    <div className="flex h-20 items-center justify-between bg-calmBlue px-6 py-4">
      <h2 className="font-bold text-white">LIFE MASTER</h2>
      {isUser && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-400">
          <p className="text-3xl font-bold text-white">{user?.name?.slice(0, 1) || "U"}</p>
        </div>
      )}
    </div>
  );
}

export default Header;
