import { FieldError } from "react-hook-form";

export type IInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
  React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
    id: string;
    label?: string;
    placeholder?: string;
    type?: string;
    message?: FieldError | string;
    classNameMessage?: string;
    isPassword?: boolean;
  };
