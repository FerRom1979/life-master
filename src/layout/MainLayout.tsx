import React, { ReactNode } from "react";

import Header from "@/components/header";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <div className="min-h-full">
        <Header />
        <div className="flex flex-grow flex-col"></div>
        <main>
          <div className="max-auto py-6">{children}</div>
        </main>
      </div>
    </>
  );
}

export default MainLayout;
