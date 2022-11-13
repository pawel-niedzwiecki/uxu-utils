import {MarkAsNumberNotRequired} from '@uxu/types';
import styled, {css} from 'styled-components';
import {Breakpoints} from 'theme';

export const ColStyle = styled.div<{ cols: MarkAsNumberNotRequired<Breakpoints> }>`
  ${({theme: {space, breakpoints, flex}, ...props}) => {
    const keysInProps = Object.keys(props);
    const keysInBreakpoints = Object.keys(breakpoints);

    return keysInProps.map(key => {
      if (keysInBreakpoints.some(keyInBreakpoint => keyInBreakpoint === key)) {
        const countW = (100 * props.cols[key]) / flex.col;
        const w = countW % 1 === 0 ? countW : countW.toFixed(4);
        const styleCol = css`
          flex: ${w}%;
          width: 100%;
          max-width: ${w}%;
          position: relative;
          padding-left: ${space.bases};
          padding-right: ${space.bases};
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
`;
