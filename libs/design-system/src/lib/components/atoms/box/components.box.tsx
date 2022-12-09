import { BoxProps } from './props';
import styled from 'styled-components';
import { forwardRef, Ref } from 'react';

export const Box = forwardRef((props: BoxProps, ref: Ref<HTMLElement>) => <StyledBox ref={ref} {...props} />);

const StyledBox = styled.div`
  box-sizing: border-box;
`;
