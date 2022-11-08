import styled from 'styled-components';
import { forwardRef, Ref } from 'react';
import { borderRadius, boxShadow, color, space } from 'styled-system';

import { BoxProps } from './props';

export const Box = forwardRef((props: BoxProps, ref: Ref<HTMLElement>) => <StyledBox ref={ref} {...props} />);

const StyledBox = styled.div`
  ${borderRadius};
  ${boxShadow};
  ${color};
  ${space};
  box-sizing: border-box;
`;
