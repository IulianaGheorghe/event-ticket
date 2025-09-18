import { LuTicket } from "react-icons/lu";
import Button from "./Button";
import TicketType from "./TicketType";

interface Props {
  onAddTicketType: () => void;
}

const TicketTypesSection = ({ onAddTicketType }: Props) => {
  return (
    <div className="bg-gray-800 p-5 rounded-lg border-2 border-gray-400">
      <div className="flex justify-between items-center mb-4">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-white">
          <LuTicket /> Ticket Types
        </h2>
        <Button type="button" onClick={onAddTicketType}>
          + Add Ticket Type
        </Button>
      </div>
      <TicketType
        name="VIP"
        price={99}
        onChange={() => {}}
        onRemove={() => {}}
      />
    </div>
  );
};

export default TicketTypesSection;
