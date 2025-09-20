interface Props {
  selectedValue: string;
  setSelectedValue: (e: string) => void;
  options: { name: string; value: string }[];
}

const Dropdown = ({ selectedValue, setSelectedValue, options }: Props) => {
  return (
    <select
      value={selectedValue}
      onChange={(e) => setSelectedValue(e.target.value)}
      className="flex bg-gray-800 p-2 rounded-lg border-2 border-gray-600"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
