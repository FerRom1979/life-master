import React from "react";

function Button({
  label,
  className,
  type = "button",
  disabled,
  ...rest
}: {
  label: string;
  className?: string;
  type: "button" | "submit";
  disabled?: boolean;
}) {
  return (
    <button
      className={`border-1 border-[#ccc} rounded-xl bg-calmBlue px-8 py-2 text-[20px] font-bold text-white disabled:cursor-not-allowed disabled:opacity-25 ${className}`}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {label}
    </button>
  );
}

export default Button;
