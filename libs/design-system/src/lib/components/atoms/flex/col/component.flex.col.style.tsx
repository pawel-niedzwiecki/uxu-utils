import styled, { css } from 'styled-components';
import type { ObjectMapType } from 'utils';
import { listensPropsBorder, listensPropsColor, listensPropsShadow } from 'utils';


export const Wrapper = styled.div<{ cols: ObjectMapType<number> }>`
  ${({theme: {spaces, breakpoints, flexs}, cols}) => {
    const keyInCols = Object.keys(cols);
    const keysInBreakpoints = Object.keys(breakpoints);


    return keyInCols.map(key => {
      if (keysInBreakpoints.some(keyInBreakpoint => keyInBreakpoint === key)) {
        const countW = (100 * cols[key]) / flexs.col;
        const w = countW % 1 === 0 ? countW : countW.toFixed(4);
        const styleCol = css`
          ${listensPropsColor};
          ${listensPropsBorder};
          ${listensPropsShadow};
          flex: ${w}%;
          width: 100%;
          max-width: ${w}%;
          position: relative;
          padding-left: ${spaces.default};
          padding-right: ${spaces.default};
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
