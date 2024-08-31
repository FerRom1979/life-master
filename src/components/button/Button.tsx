import React from "react";

import SpinnerBTN from "../spinner/spinnerBtn";
import { IButtonProps } from "./types";

function Button({
  label = "",
  className = "",
  type = "button",
  disabled = false,
  loading = false,
  ...rest
}: IButtonProps) {
  return (
    <button
      className={`border-1 border-[#ccc} relative flex items-center rounded-xl bg-calmBlue px-6 py-2 text-[20px] font-bold text-white disabled:cursor-not-allowed disabled:opacity-25 ${className}`}
      type={type}
      disabled={disabled || loading}
      {...rest}
    >
      {loading && <SpinnerBTN />}
      {label}
    </button>
  );
}

export default Button;
