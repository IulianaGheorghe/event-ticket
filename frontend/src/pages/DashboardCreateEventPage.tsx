import { useState } from "react";
import FormField from "../components/FormField";
import InputField from "../components/InputField";
import DateTimeToggle from "../components/DateTimeToggle";
import TextArea from "../components/TextArea";
import Button from "../components/Button";
import TicketTypesSection from "../components/TicketTypesSection";
import SelectButton from "../components/SelectButton";
import type {
  CreateEventRequest,
  CreateTicketTypeRequest,
  EventStatusEnum,
} from "../domain/Domain";
import { createEvent } from "../lib/API";
import { useNavigate } from "react-router-dom";
import { useAuth } from "react-oidc-context";
import Alert from "../components/Alert";

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
  status: EventStatusEnum;
  tickets: Ticket[];
  modalOpen: boolean;
  editingTicketId: number;
}

const DashboardCreateEventPage = () => {
  const { isLoading, user } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState<string | undefined>();

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
    status: "DRAFT",
    tickets: [],
    modalOpen: false,
    editingTicketId: -1,
  });

  const combineDateTime = (dateStr: string, timeStr: string): Date => {
    const [year, month, day] = dateStr.split("-").map(Number);
    const [hours, minutes] = timeStr.split(":").map(Number);

    const utcResult = new Date(
      Date.UTC(year, month - 1, day, hours, minutes, 0, 0) // months are 0-based
    );

    return utcResult;
  };

  const handleCreateEventSubmit = async (accessToken: string) => {
    const ticketTypes: CreateTicketTypeRequest[] = form.tickets.map(
      (ticketType) => {
        return {
          name: ticketType.name,
          price: ticketType.price,
          description: ticketType.description,
          totalAvailable: ticketType.total,
        };
      }
    );

    const request: CreateEventRequest = {
      name: form.eventName,
      start:
        form.eventStartDate && form.eventStartTime
          ? combineDateTime(form.eventStartDate, form.eventStartTime)
          : undefined,
      end:
        form.eventEndDate && form.eventEndTime
          ? combineDateTime(form.eventEndDate, form.eventEndTime)
          : undefined,
      venue: form.venueDetails,
      salesStart:
        form.eventSalesStartDate && form.eventSalesStartTime
          ? combineDateTime(form.eventSalesStartDate, form.eventSalesStartTime)
          : undefined,
      salesEnd:
        form.eventSalesEndDate && form.eventSalesEndTime
          ? combineDateTime(form.eventSalesEndDate, form.eventSalesEndTime)
          : undefined,
      status: form.status,
      ticketTypes: ticketTypes,
    };

    try {
      await createEvent(accessToken, request);
      navigate("/organizers");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else if (typeof err === "string") {
        setError(err);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(undefined);

    if (isLoading || !user || !user.access_token) {
      console.error("User not found!");
      return;
    }

    await handleCreateEventSubmit(user.access_token);
  };

  const updateField = (field: keyof FormState, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className="min-h-screen p-10 w-[min(100%,40rem)] mx-auto space-y-5"
      >
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
            setValue={(e) => updateField("eventName", e.target.value)}
          />
        </FormField>
        <FormField
          label="Event Start"
          helperText="The date and time that the event starts."
        >
          <DateTimeToggle
            enabled={form.eventStartEnabled}
            onToggle={() =>
              updateField("eventStartEnabled", !form.eventStartEnabled)
            }
            date={form.eventStartDate}
            time={form.eventStartTime}
            onDateChange={(val) => updateField("eventStartDate", val)}
            onTimeChange={(val) => updateField("eventStartTime", val)}
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
            onDateChange={(val) => updateField("eventEndDate", val)}
            onTimeChange={(val) => updateField("eventEndTime", val)}
          />
        </FormField>
        <FormField
          label="Venue Details"
          helperText="Details about the venue, please include as much detail as possible."
        >
          <TextArea
            value={form.venueDetails}
            onChange={(val) => updateField("venueDetails", val)}
          />
        </FormField>
        <FormField
          label="Event Sales Start"
          helperText="The date and time that tickets are available to purchase for the event."
        >
          <DateTimeToggle
            enabled={form.eventSalesStartEnabled}
            onToggle={() =>
              updateField(
                "eventSalesStartEnabled",
                !form.eventSalesStartEnabled
              )
            }
            date={form.eventSalesStartDate}
            time={form.eventSalesStartTime}
            onDateChange={(val) => updateField("eventSalesStartDate", val)}
            onTimeChange={(val) => updateField("eventSalesStartTime", val)}
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
            onDateChange={(val) => updateField("eventSalesEndDate", val)}
            onTimeChange={(val) => updateField("eventSalesEndTime", val)}
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
          <SelectButton
            selectedValue={form.status}
            setSelectedValue={(val) => updateField("status", val)}
            options={[
              { name: "Draft", value: "DRAFT" },
              { name: "Published", value: "PUBLISHED" },
            ]}
          />
        </FormField>

        {error && (
          <Alert title="Error" description={error} variant="destructive" />
        )}

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default DashboardCreateEventPage;
