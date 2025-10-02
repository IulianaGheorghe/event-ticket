import type { ReactNode } from "react";

interface Props {
  type: "button" | "submit" | "reset";
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ type, children, onClick }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-4 py-2 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors"
    >
      {children}
    </button>
  );
};

export default Button;
