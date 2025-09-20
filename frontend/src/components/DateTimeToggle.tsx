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
      <label className="flex w-fit cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={enabled}
            onChange={onToggle}
            className="sr-only peer"
          />
          {/* Track */}
          <div className="w-11 h-6 bg-gray-600 rounded-full peer-checked:bg-blue-500 transition duration-300 ease-in-out" />
          {/* Knob */}
          <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition duration-300 ease-in-out peer-checked:translate-x-5" />
        </div>
      </label>
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
