import React from 'react';
export interface InputProps {
    type?: 'text' | 'email' | 'textarea';
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    label: string;
    rows?: number;
  }

const Input: React.FC<InputProps> = ({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  label, 
  rows = 6 
}) => {
  const baseClasses = "w-full px-4 py-3 bg-black bg-opacity-40 rounded-lg focus:outline-none focus:border-transparent text-white transition-all duration-300 shadow-[0_0_8px_3px_rgba(253,211,25,.25)]";
  
  return (
    <div>
      <label className="block text-sm font-medium text-primary mb-2">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
          className={`${baseClasses} resize-none`}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={baseClasses}
        />
      )}
    </div>
  );
};

export default Input;