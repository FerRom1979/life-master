export interface IButtonProps {
  label: string;
  className?: string;
  type: "button" | "submit";
  disabled?: boolean;
  loading?: boolean;
}
