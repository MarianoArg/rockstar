import { MdExpandMore } from 'react-icons/md';
import React from 'react';

type Option = {
  value: string | number;
  label: string;
};

interface Props {
  label: string;
  name: string;
  options: Option[];
  onChange: (data: { name: string; value: string | number }) => void;
}

export default function Select({ label, name, onChange, options = [] }: Props) {
  const selectRef = React.useRef<HTMLSelectElement>(null);

  const handleChange = (e) => {
    const { target } = e;
    if (typeof onChange === 'function') {
      onChange({ name: target.name, value: target.value });
    }
  };

  return (
    <div className="flex">
      <label className="text-white text-opacity-80 mr-2">{label}</label>
      <div className="flex relative items-center	">
        <select
          ref={selectRef}
          className="appearance-none focus:outline-none bg-transparent text-vibeRed font-semibold pr-4 border-b border-vibeRed"
          name={name}
          onChange={handleChange}
        >
          {options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <span className="absolute right-0 text-vibeRed">
          <MdExpandMore />
        </span>
      </div>
    </div>
  );
}
