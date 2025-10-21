import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  optional?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  optional,
  id,
  ...props
}) => {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block mb-2 text-textDark font-medium">
        {label} {optional && <small className="text-textLight text-sm">(Optional)</small>}
      </label>
      <input
        id={id}
        className={`w-full px-4 py-3 border-2 rounded-lg font-sans text-base transition-colors duration-300 focus:outline-none ${
          error ? 'border-red-500' : 'border-gray-300 focus:border-secondary'
        }`}
        {...props}
      />
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
};

