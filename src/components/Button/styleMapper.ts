import { CSSProperties } from 'react';
import { ButtonProps } from './types';
import { PROP_DEFAULTS, SIZE_STYLES, VARIANT_STYLES } from './constants';

// Maps prop values to css styles.
export const styleMapper = (props: ButtonProps, isHovered?: boolean) => {
  // Set default values.
  const {
    size = PROP_DEFAULTS.size,
    variant = PROP_DEFAULTS.variant,
    margin = '0',
    additionalStyles,
  } = props;

  const styles: CSSProperties = {
    display: 'inline-block',
    ...SIZE_STYLES[size!],
    margin,
    borderRadius: '4px',
    border: 'none',
    textDecoration: 'none',
    fontSize: '16px',
    lineHeight: '27px',
    cursor: 'pointer',
    ...VARIANT_STYLES(isHovered)[variant!],
  };

  // Adds additionalStyles after styles, so they will override any style properties of styles object.
  return { ...styles, ...additionalStyles };
};
