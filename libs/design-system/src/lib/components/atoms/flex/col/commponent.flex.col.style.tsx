import styled, { css } from 'styled-components';
import { Props } from './commponent.flex.col';
import { Breakpoints } from 'theme';

export const ColStyle = styled.div<Props<Breakpoints> & { cols: Props<Breakpoints> }>`
  ${({ theme: { space, breakpoints, flex }, ...props }) => css`
    width: 100%;
    position: relative;
    padding-left: ${space.bases};
    padding-right: ${space.bases};
    ${() => {
      const keysInProps = Object.keys(props);
      const keysInBreakpoints = Object.keys(breakpoints);

      return keysInProps.map((key) => {
        if (keysInBreakpoints.some((keyInBreakpoint) => keyInBreakpoint === key)) {
          const countW = (100 * props.cols[key]) / flex.col;
          const w = countW % 1 === 0 ? countW : countW.toFixed(4);
          const styleCol = css`
            flex: ${w}%;
            max-width: ${w}%;
          `;

          if (breakpoints[key] === 0)
            return css`
              ${styleCol};
            `;
          else
            return css`
              @media all and (min-width: ${breakpoints[key]}px) {
                ${styleCol};
              }
            `;
        } else return null;
      });
    }}
  `}
`;
