interface AlertProps {
  variant?: "default" | "destructive";
  title?: string;
  description?: string;
}

const Alert = ({ variant = "default", title, description }: AlertProps) => {
  const base = "w-full rounded-lg border px-4 py-3 text-sm";
  const styles =
    variant === "destructive"
      ? "bg-red-100 border-red-400 text-red-700"
      : "bg-gray-100 border-gray-300 text-gray-800";

  return (
    <div role="alert" className={`${base} ${styles}`}>
      {title && <h4 className="font-medium">{title}</h4>}
      {description && <p className="text-sm">{description}</p>}
    </div>
  );
};

export default Alert;
