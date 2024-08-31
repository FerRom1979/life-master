import React from "react";

import { IWrapperFormProps } from "./types";

function WrapperForm({ children, title }: IWrapperFormProps): JSX.Element {
  return (
    <div className="flex h-screen items-center justify-center px-6">
      <div className="flex w-96 max-w-[800px] flex-col items-center justify-center rounded-lg bg-white px-5 py-10 shadow-lg">
        <div className="mb-4 flex h-[60px] w-[60px] items-center justify-center rounded bg-black">
          <h2 className="text-body-lg font-bold text-white">{title}</h2>
        </div>
        {children}
      </div>
    </div>
  );
}

export default WrapperForm;
