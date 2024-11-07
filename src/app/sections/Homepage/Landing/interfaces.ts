import { ElementType } from 'react';

export interface StyledComponentProps {
  styles?: string;
}

export interface TypographyProps extends StyledComponentProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export interface ButtonProps extends StyledComponentProps {
  variant: 'text' | 'outlined' | 'contained';
}

export interface BoxProps extends StyledComponentProps {
  component?: ElementType;
}