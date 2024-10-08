import { renderIconPassword } from "@/utils/renderIconsPassword";
import React, { forwardRef, Ref, useState } from "react";

import { IInputProps } from "./types";

const Input = forwardRef(function Input(
  { id, label, placeholder, type = "text", message, classNameMessage, isPassword = false, ...rest }: IInputProps,
  ref: Ref<HTMLInputElement | HTMLTextAreaElement>,
) {
  const InputComponent = "input" as React.ElementType;

  const [typePassword, setTypePassword] = useState<string>(type);

  return (
    <div className="relative w-full">
      <label htmlFor={id}>{label}</label>
      <InputComponent
        className="mb-4 w-full rounded-md border border-[#ccc] px-2 py-2 text-mediumGray"
        id={id}
        placeholder={placeholder}
        type={typePassword}
        ref={ref}
        {...rest}
      />
      {isPassword && (
        <div className="absolute right-3 top-3 h-full">{renderIconPassword(typePassword, setTypePassword)}</div>
      )}
      {message && (
        <p role="alert" className={`text-md mb-2 ml-2 text-red-700 ${classNameMessage}`}>
          {message as string}
        </p>
      )}
    </div>
  );
});

export default Input;
