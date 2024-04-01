import '../../variables.css';
import React, { memo, useState } from 'react';
import { useDynamicStyles } from '../../hooks';
import { ButtonProps } from './types';
import { styleMapper } from './styleMapper';

const ButtonComponent = (props: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const styles = useDynamicStyles(props, styleMapper, isHovered);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <button
      id={props.id}
      className={props.className}
      aria-label={props.ariaLabel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={props.onClick ? () => props.onClick() : () => {}}
      style={styles}
    >
      {props.children}
    </button>
  );
};

/**
 * Button component.
 * @param {ButtonProps} props - Properties are shown below.
 * @property {ReactNode} children - The content within the button component.
 * @property {string} [id] - An optional identifier for the button component.
 * @property {string} [className] - Additional CSS class names to apply to the component.
 * @property {string} [ariaLabel] - Label for component that can be beneficial for users of screen readers or other assistive technologies.
 * @property {'small' | 'medium' | 'large'} [size='medium'] - Size of button component.
 * @property {'primary' | 'secondary' | 'tertiary'} [variant='primary'] - Variant of button component.
 * @property {string | number} [margin='0'] - External spacing around the text component.
 * @property {Function} [onClick] - Function called when the button is clicked.
 * @property {CSSProperties} [additionalStyles] - Additional inline styles to apply to the button component.
 */
export const Button = memo(ButtonComponent);
