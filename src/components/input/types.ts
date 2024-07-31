import { FieldError } from "react-hook-form";

export interface IInputProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  id: string;
  label?: string;
  placeholder?: string;
  type?: string;
  message?: FieldError | string;
  classNameMessage?: string;
  isPassword?: boolean;
}
