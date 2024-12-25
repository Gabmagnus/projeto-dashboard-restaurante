import { Container } from './styles';

interface InputBoxProps {
  type: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isRequired?: boolean;
}

export function InputBox({ type = "text",
                           placeholder,
                           onChange,
                           value,
                           isRequired = false }: InputBoxProps) {
  return (
    <Container 
    type={type} 
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    required={isRequired} 
    />
  );
}
