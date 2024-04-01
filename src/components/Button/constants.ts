import { CSSProperties } from 'react';
import { ButtonProps } from './types';

// Default values for props of ButtonProps.
export const PROP_DEFAULTS: Pick<ButtonProps, 'size' | 'variant'> = {
  size: 'medium',
  variant: 'primary',
};

// Keys in VARIANT_STYLES are of type ButtonProps['variant'], excluding undefined.
export const VARIANT_STYLES = (
  isHovered: boolean,
): Record<Exclude<ButtonProps['variant'], undefined>, CSSProperties> => {
  return {
    primary: {
      backgroundColor: 'var(--_components-dark-blue2)',
      color: 'var(--_components-white)',
    },
    secondary: {
      backgroundColor: isHovered ? 'var(--_components-white)' : 'var(--_components-light-grey2)',
      color: 'var(--_components-text-color)',
      border: '1px solid var(--_components-dark-grey)',
    },
    tertiary: {
      backgroundColor: 'var(--_components-white)',
      color: 'var(--_components-text-color)',
    },
  };
};

// Keys in SIZE_STYLES are of type ButtonProps['size'], excluding undefined.
export const SIZE_STYLES: Record<Exclude<ButtonProps['size'], undefined>, CSSProperties> = {
  small: {
    fontSize: '12px',
    padding: '4px 8px',
  },
  medium: {
    fontSize: '16px',
    padding: '6px 12px',
  },
  large: {
    fontSize: '20px',
    padding: '8px 16px',
  },
};
