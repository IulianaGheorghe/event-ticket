import * as SelectPrimitive from "@radix-ui/react-select";
import { IoChevronDown } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

interface Props {
  selectedValue: string;
  setSelectedValue: (e: string) => void;
  options: { name: string; value: string }[];
}

const SelectButton = ({ selectedValue, setSelectedValue, options }: Props) => {
  return (
    <SelectPrimitive.Root
      value={selectedValue}
      onValueChange={setSelectedValue}
    >
      <SelectPrimitive.Trigger className="flex w-fit items-center justify-between gap-2 rounded-lg border-2 border-gray-600 bg-gray-800 text-gray-300 px-3 py-2 text-sm whitespace-nowrap shadow-xs outline-none disabled:cursor-not-allowed disabled:opacity-50 font-semibold">
        <SelectPrimitive.Value placeholder="Select an option" />
        <SelectPrimitive.Icon asChild>
          <IoChevronDown className="size-4 opacity-70" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content className="bg-gray-700 rounded-lg shadow-lg border border-gray-600 overflow-hidden font-semibold">
          <SelectPrimitive.Viewport>
            {options.map((option) => (
              <SelectPrimitive.Item
                key={option.value}
                value={option.value}
                className="flex items-center px-3 py-2 text-sm text-gray-300 cursor-pointer hover:bg-gray-800 focus:bg-gray-800 focus:outline-none"
              >
                <SelectPrimitive.ItemText>
                  {option.name}
                </SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator className="ml-auto">
                  <FaCheck className="size-4" />
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};

export default SelectButton;
