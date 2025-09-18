import Button from "./Button";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin7Line } from "react-icons/ri";

interface Props {
  name: string;
  price: number;
  onChange: (field: string, value: string | number) => void;
  onRemove: () => void;
}

const TicketType = ({ name, price, onChange, onRemove }: Props) => {
  return (
    <div className="flex justify-between items-center bg-gray-600 p-5 rounded-xl">
      <div className="space-x-3">
        <h2 className="inline text-lg font-semibold text-white">{name}</h2>
        <span className="px-2 py-1 bg-gray-300 text-gray-800 font-semibold rounded-xl dark:bg-gray-700 dark:text-white border border-gray-500">
          ${price}
        </span>
        <p className="mt-1 text-gray-400">100 tickets available</p>
      </div>

      <div className="flex space-x-1 items-baseline">
        <button className="p-3 text-white text-xl font-semibold rounded-xl hover:bg-gray-300 hover:text-gray-900">
          <FaRegEdit />
        </button>
        <button className="p-3 text-red-300 text-xl font-semibold rounded-xl hover:bg-gray-300 hover:text-red-500">
          <RiDeleteBin7Line />
        </button>
      </div>
    </div>
  );
};

export default TicketType;
