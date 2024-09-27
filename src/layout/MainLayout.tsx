import { useAppSelector } from "@/store";
import React, { ReactNode } from "react";

import Header from "@/components/layout/header";
import Toast from "@/components/ui/toast/Toast";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const { isMessage } = useAppSelector((state) => state.messages);
  return (
    <>
      <div className="min-h-full">
        <Header />
        {isMessage && <Toast />}
        <div className="flex flex-grow flex-col"></div>
        <main>
          <div className="max-auto py-6">{children}</div>
        </main>
      </div>
    </>
  );
}

export default MainLayout;
