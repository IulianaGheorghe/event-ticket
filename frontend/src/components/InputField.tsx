interface Props {
  type: string;
  value: string | number;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ type, value, setValue }: Props) => {
  return (
    <input
      type={type}
      value={value}
      onChange={setValue}
      className="w-full p-2 rounded-md bg-gray-800 text-white border-2 border-gray-600 focus:border-gray-400 focus:outline-none"
    />
  );
};

export default InputField;
