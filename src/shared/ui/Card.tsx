import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-white/10 rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
};