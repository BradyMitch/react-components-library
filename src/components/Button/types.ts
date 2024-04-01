import { CSSProperties, ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  ariaLabel?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'tertiary';
  margin?: string | number;
  onClick?: Function;
  additionalStyles?: CSSProperties;
};
