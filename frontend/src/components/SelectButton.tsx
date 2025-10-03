import { IoChevronDown } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import {
  Select,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPortal,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from "@radix-ui/react-select";

interface Props {
  selectedValue: string;
  setSelectedValue: (e: string) => void;
  options: { name: string; value: string }[];
}

const SelectButton = ({ selectedValue, setSelectedValue, options }: Props) => {
  return (
    <Select value={selectedValue} onValueChange={setSelectedValue}>
      <SelectTrigger className="flex w-fit items-center justify-between gap-2 rounded-lg border-2 border-gray-600 bg-gray-800 text-gray-300 px-3 py-2 text-sm whitespace-nowrap shadow-xs outline-none disabled:cursor-not-allowed disabled:opacity-50 font-semibold">
        <SelectValue placeholder="Select an option" />
        <SelectIcon asChild>
          <IoChevronDown className="size-4 opacity-70" />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectContent className="bg-gray-700 rounded-lg shadow-lg border border-gray-600 overflow-hidden font-semibold">
          <SelectViewport>
            {options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="flex items-center px-3 py-2 text-sm text-gray-300 cursor-pointer hover:bg-gray-800 focus:bg-gray-800 focus:outline-none"
              >
                <SelectItemText>{option.name}</SelectItemText>
                <SelectItemIndicator className="ml-auto">
                  <FaCheck className="size-4" />
                </SelectItemIndicator>
              </SelectItem>
            ))}
          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

export default SelectButton;
