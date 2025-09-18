import { useState } from "react";

interface TicketTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (ticket: {
    name: string;
    price: number;
    total: number;
    description: string;
  }) => void;
}

const TicketTypeModal = ({ isOpen, onClose, onSave }: TicketTypeModalProps) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [description, setDescription] = useState("");

  if (!isOpen) return null; // don’t render if closed

  const handleSubmit = () => {
    onSave({ name, price, total, description });
    onClose(); // close after save
    // reset fields
    setName("");
    setPrice(0);
    setTotal(0);
    setDescription("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="bg-gray-900 p-6 rounded-lg w-[400px] shadow-lg">
        <h2 className="text-xl font-semibold text-white mb-4">
          Add Ticket Type
        </h2>
        <p className="text-gray-400 text-sm mb-4">
          Please enter details of the ticket type
        </p>

        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white border border-gray-700"
          />

          <div className="flex gap-3">
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="p-2 rounded bg-gray-800 text-white border border-gray-700 flex-1"
            />
            <input
              type="number"
              placeholder="Total Available"
              value={total}
              onChange={(e) => setTotal(Number(e.target.value))}
              className="p-2 rounded bg-gray-800 text-white border border-gray-700 flex-1"
            />
          </div>

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white border border-gray-700 min-h-[80px]"
          />
        </div>

        <div className="flex justify-end mt-4 gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketTypeModal;
