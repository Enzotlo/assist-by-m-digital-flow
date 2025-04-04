
import React from 'react';
import { cn } from '@/lib/utils';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const PrimaryButton = ({ children, className, ...props }: PrimaryButtonProps) => {
  return (
    <button
      className={cn(
        "bg-rose-powder text-gray-dark font-medium py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors duration-300",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
