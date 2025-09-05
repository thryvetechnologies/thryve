import React from 'react';
export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit';
    variant?: 'primary' | 'secondary';
  }

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary' 
}) => {
  const baseClasses = "font-semibold px-8 py-3 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl";
  const variantClasses = {
    primary: "bg-amber-500 text-black hover:bg-yellow-400",
    secondary: "bg-gray-600 text-white hover:bg-gray-700"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;