import { LuTicket } from "react-icons/lu";
import Button from "./Button";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin7Line } from "react-icons/ri";
import { type Ticket } from "../pages/DashboardCreateEventPage";
import TicketTypeModal from "./TicketTypeModal";
import { useState } from "react";

interface Props {
  tickets: Ticket[];
  onRemoveTicket: (id: number) => void;
  onSaveTicket: (ticket: Partial<Ticket>) => void;
}

const TicketTypesSection = ({
  tickets,
  onRemoveTicket,
  onSaveTicket,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editingTicket, setEditingTicket] = useState<Ticket>();

  return (
    <>
      <div className="bg-gray-800 p-5 rounded-lg border-2 border-gray-600">
        <div className="flex justify-between items-center mb-4">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-white">
            <LuTicket /> Ticket Types
          </h2>
          <div className="border border-gray-700 rounded-lg">
            <Button
              type="button"
              onClick={() => {
                setEditingTicket(undefined);
                setIsOpen(true);
              }}
            >
              + Add Ticket Type
            </Button>
          </div>
        </div>
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="flex justify-between items-center bg-gray-600 p-5 rounded-xl mt-2.5"
          >
            <div className="space-x-3">
              <h2 className="inline text-lg font-semibold text-white">
                {ticket.name}
              </h2>
              <span className="px-2 py-1 bg-gray-300 text-gray-800 font-semibold rounded-xl dark:bg-gray-700 dark:text-white border border-gray-500">
                ${ticket.price}
              </span>
              <p className="mt-1 text-gray-400">
                {ticket.total} tickets available
              </p>
            </div>

            <div className="flex space-x-1 items-baseline">
              <button
                type="button"
                onClick={() => {
                  setEditingTicket(ticket);
                  setIsOpen(true);
                }}
                className="p-3 text-white text-xl font-semibold rounded-xl hover:bg-gray-300 hover:text-gray-900"
              >
                <FaRegEdit />
              </button>
              <button
                type="button"
                onClick={() => onRemoveTicket(ticket.id)}
                className="p-3 text-red-300 text-xl font-semibold rounded-xl hover:bg-gray-300 hover:text-red-500"
              >
                <RiDeleteBin7Line />
              </button>
            </div>
          </div>
        ))}
      </div>
      {isOpen && (
        <TicketTypeModal
          editingTicket={editingTicket}
          onClose={() => setIsOpen(false)}
          onSave={(ticketData) => onSaveTicket(ticketData)}
        />
      )}
    </>
  );
};

export default TicketTypesSection;
