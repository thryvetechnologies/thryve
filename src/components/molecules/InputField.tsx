import React from 'react';
import Input from '../atoms/Input';
export interface InputProps {
    type?: 'text' | 'email' | 'textarea';
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    label: string;
    rows?: number;
  }

const InputField: React.FC<InputProps> = (props) => {
  return <Input {...props} />;
};

export default InputField;