interface Props {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-4 py-2 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors"
    >
      {children}
    </button>
  );
};

export default Button;
