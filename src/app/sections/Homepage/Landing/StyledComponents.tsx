import styled from '@emotion/styled';
import { Button as MuiButton, Typography as MuiTypography, Box as MuiBox } from '@mui/material';
import { BoxProps, ButtonProps, TypographyProps } from './interfaces';

export const Box = styled(MuiBox)<BoxProps>`
  ${props => props.styles}
`;

export const Typography = styled(MuiTypography)<TypographyProps>`
  ${props => props.styles}
`;

export const Button = styled(MuiButton)<ButtonProps>`
  ${props => props.styles}
`;