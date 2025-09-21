import { useState } from "react";
import FormField from "../components/FormField";
import InputField from "../components/InputField";
import DateTimeToggle from "../components/DateTimeToggle";
import TextArea from "../components/TextArea";
import Button from "../components/Button";
import TicketTypesSection from "../components/TicketTypesSection";
import Dropdown from "../components/Dropdown";

export interface Ticket {
  id: number;
  name: string;
  price: number;
  total: number;
  description: string;
}

interface FormState {
  eventName: string;
  eventStartEnabled: boolean;
  eventStartDate: string;
  eventStartTime: string;
  eventEndEnabled: boolean;
  eventEndDate: string;
  eventEndTime: string;
  venueDetails: string;
  eventSalesStartEnabled: boolean;
  eventSalesStartDate: string;
  eventSalesStartTime: string;
  eventSalesEndEnabled: boolean;
  eventSalesEndDate: string;
  eventSalesEndTime: string;
  status: string;
  tickets: Ticket[];
  modalOpen: boolean;
  editingTicketId: number;
}

const DashboardCreateEventPage = () => {
  const [form, setForm] = useState<FormState>({
    eventName: "",
    eventStartEnabled: false,
    eventStartDate: "",
    eventStartTime: "",
    eventEndEnabled: false,
    eventEndDate: "",
    eventEndTime: "",
    venueDetails: "",
    eventSalesStartEnabled: false,
    eventSalesStartDate: "",
    eventSalesStartTime: "",
    eventSalesEndEnabled: false,
    eventSalesEndDate: "",
    eventSalesEndTime: "",
    status: "Draft",
    tickets: [],
    modalOpen: false,
    editingTicketId: -1,
  });

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <>
      <form className="min-h-screen p-10 w-[min(100%,40rem)] mx-auto space-y-5">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-2">Create a New Event</h1>
          <p className="text-lg">
            Fill out the form below to create your event
          </p>
        </div>
        <FormField
          label="Event Name"
          helperText="This is the public name of your event."
        >
          <InputField
            type="text"
            value={form.eventName}
            setValue={(e) =>
              setForm((prev) => ({ ...prev, eventName: e.target.value }))
            }
          />
        </FormField>
        <FormField
          label="Event Start"
          helperText="The date and time that the event starts."
        >
          <DateTimeToggle
            enabled={form.eventStartEnabled}
            onToggle={() =>
              setForm((prev) => ({
                ...prev,
                eventStartEnabled: !form.eventStartEnabled,
              }))
            }
            date={form.eventStartDate}
            time={form.eventStartTime}
            onDateChange={(val) =>
              setForm((prev) => ({ ...prev, eventStartDate: val }))
            }
            onTimeChange={(val) =>
              setForm((prev) => ({ ...prev, eventStartTime: val }))
            }
          />
        </FormField>
        <FormField
          label="Event End"
          helperText="The date and time that the event ends."
        >
          <DateTimeToggle
            enabled={form.eventEndEnabled}
            onToggle={() =>
              setForm((prev) => ({
                ...prev,
                eventEndEnabled: !prev.eventEndEnabled,
              }))
            }
            date={form.eventEndDate}
            time={form.eventEndTime}
            onDateChange={(val) =>
              setForm((prev) => ({ ...prev, eventEndDate: val }))
            }
            onTimeChange={(val) =>
              setForm((prev) => ({ ...prev, eventEndTime: val }))
            }
          />
        </FormField>
        <FormField
          label="Venue Details"
          helperText="Details about the venue, please include as much detail as possible."
        >
          <TextArea
            value={form.venueDetails}
            onChange={(val) =>
              setForm((prev) => ({ ...prev, venueDetails: val }))
            }
          />
        </FormField>
        <FormField
          label="Event Sales Start"
          helperText="The date and time that tickets are available to purchase for the event."
        >
          <DateTimeToggle
            enabled={form.eventSalesStartEnabled}
            onToggle={() =>
              setForm((prev) => ({
                ...prev,
                eventSalesStartEnabled: !form.eventSalesStartEnabled,
              }))
            }
            date={form.eventSalesStartDate}
            time={form.eventSalesStartTime}
            onDateChange={(val) =>
              setForm((prev) => ({ ...prev, eventSalesStartDate: val }))
            }
            onTimeChange={(val) =>
              setForm((prev) => ({ ...prev, eventSalesStartTime: val }))
            }
          />
        </FormField>
        <FormField
          label="Event Sales End"
          helperText="The date and time that tickets are available to purchase for the event."
        >
          <DateTimeToggle
            enabled={form.eventSalesEndEnabled}
            onToggle={() =>
              setForm((prev) => ({
                ...prev,
                eventSalesEndEnabled: !prev.eventSalesEndEnabled,
              }))
            }
            date={form.eventSalesEndDate}
            time={form.eventSalesEndTime}
            onDateChange={(val) =>
              setForm((prev) => ({ ...prev, eventSalesEndDate: val }))
            }
            onTimeChange={(val) =>
              setForm((prev) => ({ ...prev, eventSalesEndTime: val }))
            }
          />
        </FormField>
        <TicketTypesSection
          tickets={form.tickets}
          onRemoveTicket={(id: number) =>
            setForm((prev) => ({
              ...prev,
              tickets: prev.tickets.filter((t) => t.id !== id),
            }))
          }
          onSaveTicket={(ticketData) =>
            "id" in ticketData
              ? setForm((prev) => ({
                  ...prev,
                  tickets: prev.tickets.map((t) =>
                    t.id === ticketData.id ? { ...t, ...ticketData } : t
                  ),
                }))
              : setForm((prev) => ({
                  ...prev,
                  tickets: [
                    ...prev.tickets,
                    {
                      id: Date.now(),
                      name: ticketData.name,
                      price: ticketData.price,
                      total: ticketData.total,
                      description: ticketData.description,
                    } as Ticket,
                  ],
                }))
          }
        />
        <FormField
          label="Status"
          helperText="Please select the status of the new event."
        >
          <Dropdown
            selectedValue={form.status}
            setSelectedValue={(val) =>
              setForm((prev) => ({ ...prev, status: val }))
            }
            options={[
              { name: "Draft", value: "draft" },
              { name: "Published", value: "published" },
            ]}
          />
        </FormField>
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </>
  );
};

export default DashboardCreateEventPage;
