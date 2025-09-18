interface Props {
  value: string;
  setValue: (e: string) => void;
}

const InputTextField = ({ value, setValue }: Props) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-full p-2 rounded-md bg-gray-800 text-white border-2 border-gray-400 focus:border-gray-600 focus:outline-none"
    />
  );
};

export default InputTextField;
