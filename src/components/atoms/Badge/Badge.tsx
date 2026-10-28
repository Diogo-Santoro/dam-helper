import type { ReactNode } from 'react';
import './Badge.css';

export interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
}

export const Badge = ({ children, variant = 'primary' }: BadgeProps) => {
  return <span className={`atom-badge atom-badge--${variant}`}>{children}</span>;
};
