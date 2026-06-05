import Input from '../../atoms/Input/Input';

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'number';
  placeholder?: string;
  required?: boolean;
  className?: string;
}

export default function FormField({
  id,
  name,
  label,
  type = 'text',
  placeholder,
  required = false,
  className = '',
}: FormFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}{required && <span aria-hidden="true"> *</span>}</label>
      <Input id={id} name={name} type={type} placeholder={placeholder} required={required} />
    </div>
  );
}
