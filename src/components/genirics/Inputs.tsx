import React from "react";
interface Props {
  type?: string;
  name?: string;
  id?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}
const Inputs: React.FC<Props> = ({
  type,
  name,
  id,
  className,
  placeholder,
  value,
  onChange,
  required,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className={`${className} bg-transparent border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none focus:border-black`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export default Inputs;
