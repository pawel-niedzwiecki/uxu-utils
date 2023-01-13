import styled, { css } from 'styled-components';
import { listensPropsColor, listensPropsSpace, listensPropsTypography } from 'utils';

const commonCss = css`
  ${listensPropsColor};
  ${listensPropsSpace};
  ${listensPropsTypography};
`;

export const H1 = styled.h1`
  ${commonCss};
`

export const H2 = styled.h2`
  ${commonCss};
`

export const H3 = styled.h3`
  ${commonCss};
`

export const H4 = styled.h4`
  ${commonCss};
`


export const H5 = styled.h5`
  ${commonCss};
`


export const H6 = styled.h6`
  ${commonCss};
`


export const P = styled.p`
  ${commonCss};
`

export const B = styled.b`
  ${commonCss};
`


export const I = styled.i`
  ${commonCss};
`

export const Strong = styled.strong`
  ${commonCss};
`
