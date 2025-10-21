import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
  fullWidth = false,
}) => {
  const baseClasses = 'inline-block px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 text-base';
  
  const variantClasses = {
    primary: 'bg-secondary text-primary hover:bg-secondary-dark hover:-translate-y-0.5 hover:shadow-cardHover',
    outline: 'border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

