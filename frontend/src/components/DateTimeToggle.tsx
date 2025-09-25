import * as SwitchPrimitive from "@radix-ui/react-switch";

interface Props {
  enabled: boolean;
  date: string;
  time: string;
  onToggle: () => void;
  onDateChange: (e: string) => void;
  onTimeChange: (e: string) => void;
}

const DateTimeToggle = ({
  enabled,
  date,
  time,
  onToggle,
  onDateChange,
  onTimeChange,
}: Props) => {
  return (
    <>
      <SwitchPrimitive.Root
        className="data-[state=checked]:bg-gray-300 data-[state=unchecked]:bg-gray-600 inline-flex h-6 w-11 items-center rounded-full shadow-xs transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50 "
        checked={enabled}
        onCheckedChange={onToggle}
      >
        <SwitchPrimitive.Thumb className="data-[state=checked]:bg-gray-700 data-[state=unchecked]:bg-gray-200 pointer-events-none block size-4 rounded-full transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-1" />
      </SwitchPrimitive.Root>

      {enabled && (
        <div className="flex gap-2 mt-2">
          <input
            type="date"
            value={date}
            onChange={(e) => onDateChange(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white border border-gray-600"
          />
          <input
            type="time"
            value={time}
            onChange={(e) => onTimeChange(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white border border-gray-600"
          />
        </div>
      )}
    </>
  );
};

export default DateTimeToggle;
