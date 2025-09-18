interface Props {
  value: string;
  onChange: (e: string) => void;
  rows?: number;
}

const TextArea = ({ value, onChange, rows = 4 }: Props) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={rows}
      className="w-full p-2 rounded-md bg-gray-800 text-white border-2 border-gray-400 focus:border-gray-600 focus:outline-none"
    />
  );
};

export default TextArea;
