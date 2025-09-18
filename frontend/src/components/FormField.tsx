import type { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  helperText: string;
  children: ReactNode;
}

const FormField = ({ label, children, helperText }: FormFieldProps) => {
  return (
    <div className="space-y-0.5">
      <label className="inline-block text-base font-semibold text-gray-200">
        {label}
      </label>
      {children}
      <p className="text-sm text-gray-400">{helperText}</p>
    </div>
  );
};

export default FormField;
