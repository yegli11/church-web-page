interface InputProps {
  id: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'number';
  placeholder?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  id,
  name,
  type = 'text',
  placeholder,
  value,
  required = false,
  disabled = false,
  className = '',
  onChange,
}: InputProps) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      required={required}
      disabled={disabled}
      className={className}
      onChange={onChange}
    />
  );
}
