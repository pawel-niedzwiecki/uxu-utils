import styled, { css } from 'styled-components';
import { Props } from './commponent.col.container';

export const ColStyle = styled.div<Props>`
  ${({ theme: { space, grid, breakpoints }, ...arg }) => css`
    width: 100%;
    position: relative;
    padding-left: ${space.bases};
    padding-right: ${space.bases};

    ${arg.xs &&
    css`
      flex: ${(100 * arg.xs) / grid.col}%;
      max-width: ${(100 * arg.xs) / grid.col}%;
    `}

    ${arg.s &&
    css`
      @media all and (min-width: ${breakpoints.sm}px) {
        flex: ${(100 * arg.s) / grid.col}%;
        max-width: ${(100 * arg.s) / grid.col}%;
      }
    `}

    ${arg.m &&
    css`
      @media all and (min-width: ${breakpoints.m}px) {
        flex: ${(100 * arg.m) / grid.col}%;
        max-width: ${(100 * arg.m) / grid.col}%;
      }
    `}

    ${arg.l &&
    css`
      @media all and (min-width: ${breakpoints.l}px) {
        flex: ${(100 * arg.l) / grid.col}%;
        max-width: ${(100 * arg.l) / grid.col}%;
      }
    `}

    ${arg.xl &&
    css`
      @media all and (min-width: ${breakpoints.xl}px) {
        flex: ${(100 * arg.xl) / grid.col}%;
        max-width: ${(100 * arg.xl) / grid.col}%;
      }
    `}
  `}
`;
