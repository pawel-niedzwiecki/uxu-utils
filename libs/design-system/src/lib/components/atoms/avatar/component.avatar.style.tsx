import styled, { css } from 'styled-components';
import { PropsSpecial } from './component.avatar.types';

export const Wrapper = styled.div<PropsSpecial>`
  ${({ size, src }) => {
    return css`
      min-width: ${size}px;
      min-height: ${size}px;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border-radius: 50%;
      border: var(--uxu-border-default);
      position: relative;
      background-color: ${src ? 'transparent' : 'var(--uxu-color-primary-background)'};

      svg {
        width: ${size && parseInt(size) / 2}px;
        color: var(--uxu-color-primary-accent3);
      }
    `;
  }}
`;
