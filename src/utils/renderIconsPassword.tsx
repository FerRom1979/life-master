import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

export const renderIconPassword = (
  type: string,
  setTypePassword: React.Dispatch<React.SetStateAction<string>>,
) => {
  if (type !== "password") {
    return (
      <IoEyeOutline
        className="cursor-pointer"
        onClick={() => setTypePassword("password")}
      />
    );
  }
  return (
    <IoEyeOffOutline
      className="cursor-pointer"
      onClick={() => setTypePassword("text")}
    />
  );
};
