import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select: React.FC<SelectProps> = ({
  label,
  error,
  options,
  id,
  ...props
}) => {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block mb-2 text-textDark font-medium">
        {label}
      </label>
      <select
        id={id}
        className={`w-full px-4 py-3 border-2 rounded-lg font-sans text-base transition-colors duration-300 focus:outline-none ${
          error ? 'border-red-500' : 'border-gray-300 focus:border-secondary'
        }`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
};

