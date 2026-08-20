import type { InputHTMLAttributes } from "react";
import "./inputs.scss";
import { SpinnerInput } from "../SpinnerInput/SpinerInput";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  label: string;
  placeholder?: string;
  loading?: boolean;
}

export default function Input({
  type = "text",
  label,
  placeholder,
  loading = false,
  ...props
}: InputProps): React.ReactElement {
  return (
    <label className="label-field">
      <p className="label-input">{label}</p>
      {loading && <SpinnerInput />}
      <input
        className="campo-formulario"
        type={type}
        placeholder={placeholder}
        disabled={loading}
        {...props}
      />
    </label>
  );
}
