import styled, {css} from 'styled-components';
import {ObjectMapType} from '@uxu/types';
import {listensPropsColor, listensPropsShadow} from '@uxu/props-styled-system';


export const ColStyle = styled.div<{ cols: ObjectMapType<number> }>`
  ${({theme: {space, breakpoints, flex}, cols}) => {
    const keyInCols = Object.keys(cols);
    const keysInBreakpoints = Object.keys(breakpoints);


    return keyInCols.map(key => {
      if (keysInBreakpoints.some(keyInBreakpoint => keyInBreakpoint === key)) {
        const countW = (100 * cols[key]) / flex.col;
        const w = countW % 1 === 0 ? countW : countW.toFixed(4);
        const styleCol = css`
          ${listensPropsColor};
          ${listensPropsShadow};
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
