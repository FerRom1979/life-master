export const customControlStyles = (isError: boolean) => {
  const background = isError ? "var(--destructive-light)" : "";
  const border = isError ? "0.063rem solid var(--destructive)" : "none";
  return {
    fontSize: "0.875rem",
    borderRadius: "0.438rem",
    boxShadow: "0rem 0.119rem 0.119rem 0rem rgba(0, 0, 0, 0.10)",
    border,
    background,
  };
};
