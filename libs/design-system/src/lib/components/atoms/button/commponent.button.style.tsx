import styled, {css} from 'styled-components';
import {listensPropsSize, listensPropsVector, listensPropsSpace} from '@uxu/props-styled-system'


const btn = `
 ${({theme: {colors}}) => css`
  border-radius: var(--geist-radius);
  color: var(--themed-fg, var(--geist-background));
  background: var(--themed-bg, var(--geist-foreground));
  border: 1px solid var(--themed-border, var(--geist-foreground));
  font-weight: 500;
  padding: 0 var(--geist-gap-half);
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-property: border-color, background, color, transform, box-shadow;
  transition-duration: .15s;
  transition-timing-function: ease;
  font-size: var(--geist-form-font);
  line-height: var(--geist-form-line-height);
  height: var(--geist-form-height);
`}
`

export const Wrapper = styled.button`
  ${btn};
  ${listensPropsSize};
  ${listensPropsSpace};
}`
