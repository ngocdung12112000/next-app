import React from 'react';

interface InputProps {
  id: string;
  type: string;
  name: string;
  value: string;
  className: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean
}

const Input: React.FC<InputProps> = ({ id, type, name, value, className, onChange, placeholder, ...rest }) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      className={className}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default Input;
