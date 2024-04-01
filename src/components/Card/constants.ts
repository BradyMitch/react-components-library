import { CardProps } from './types';

// Default values for props of CardProps.
export const PROP_DEFAULTS: Pick<
  CardProps,
  | 'padding'
  | 'margin'
  | 'borderRadius'
  | 'backgroundColor'
  | 'hoverBackgroundColor'
  | 'width'
  | 'height'
  | 'hoverEffects'
> = {
  padding: '16px 24px',
  margin: '0',
  borderRadius: '4px',
  backgroundColor: 'var(--_components-white)',
  hoverBackgroundColor: 'var(--_components-light-grey2)',
  width: '100%',
  height: '100px',
  hoverEffects: true,
};
