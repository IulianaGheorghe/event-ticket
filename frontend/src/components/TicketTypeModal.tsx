import { useEffect, useState } from "react";
import InputField from "./InputField";
import FormField from "./FormField";
import TextArea from "./TextArea";
import { IoClose } from "react-icons/io5";
import type { Ticket } from "../pages/DashboardCreateEventPage";

interface TicketTypeModalProps {
  onClose: () => void;
  onSave: (ticket: Partial<Ticket>) => void;
  editingTicket?: Ticket;
}

const TicketTypeModal = ({
  onClose,
  onSave,
  editingTicket,
}: TicketTypeModalProps) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingTicket) {
      setName(editingTicket.name);
      setPrice(editingTicket.price);
      setTotal(editingTicket.total);
      setDescription(editingTicket.description);
    } else {
      // Reset fields for new ticket
      setName("");
      setPrice(0);
      setTotal(0);
      setDescription("");
    }
  }, [editingTicket]);

  const handleSubmit = () => {
    if (editingTicket) {
      const updates: Partial<Ticket> = {};
      updates.id = editingTicket.id;
      if (name !== editingTicket.name) updates.name = name;
      if (price !== editingTicket.price) updates.price = price;
      if (total !== editingTicket.total) updates.total = total;
      if (description !== editingTicket.description)
        updates.description = description;

      onSave(updates);
    } else {
      const ticket: Partial<Ticket> = {
        name: name,
        price: price,
        total: total,
        description: description,
      };
      onSave(ticket);
    }

    onClose();
    setName("");
    setPrice(0);
    setTotal(0);
    setDescription("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
        <div className="w-full inline-flex justify-between">
          <h2 className="text-xl font-semibold text-white mb-2">
            Add Ticket Type
          </h2>
          <button className="text-2xl" onClick={onClose} type="button">
            <IoClose />
          </button>
        </div>
        <p className="text-gray-400 text-sm mb-4">
          Please enter details of the ticket type
        </p>

        <div className="flex flex-col gap-3">
          <FormField label="Name">
            <InputField
              type="text"
              value={name}
              setValue={(e) => setName(e.target.value)}
            />
          </FormField>
          <div className="flex gap-3">
            <FormField label="Price">
              <InputField
                type="number"
                value={price === 0 ? "" : price}
                setValue={(e) => setPrice(Number(e.target.value))}
              />
            </FormField>
            <FormField label="Total Available">
              <InputField
                type="number"
                value={total === 0 ? "" : total}
                setValue={(e) => setTotal(Number(e.target.value))}
              />
            </FormField>
          </div>
          <FormField label="Description">
            <TextArea
              value={description}
              onChange={(val) => setDescription(val)}
              rows={3}
            />
          </FormField>
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="button"
            onClick={handleSubmit}
            className="px-4 py-2 font-bold bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-400"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketTypeModal;
