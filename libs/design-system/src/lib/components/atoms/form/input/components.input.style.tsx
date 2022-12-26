import styled, {css} from 'styled-components'
import {SpecialProps} from "./components.input.types";

export const LabelComponent = styled.label`
  width: 100%;
  position: relative;
`;

export const InputComponent = styled.input<SpecialProps>`
  ${({error}) => css`
    width: 100%;
    height: 4rem;
    display: block;
    -webkit-appearance: none;
    border: ${error ? `var(--uxu-border-error-default)` : `var(--uxu-border-default)`};
    border-radius: var(--uxu-radii-default);
    color: var(--uxu-color-primary-foreground);
    background: var(--uxu-color-primary-background);
    transition: border-color var(--uxu-motion-default);
    padding: var(--uxu-space-default) 6rem var(--uxu-space-default) var(--uxu-space-default);

    &::placeholder {
      opacity: 1;
      color: var(--uxu-color-primary-accent3);
      transition: opacity var(--uxu-motion-default);
    }

    &:focus {
      outline: none;
      border: ${error ? `var(--uxu-border-error-default)` : `var(--uxu-border-active)`};

      &::placeholder {
        opacity: 0;
      }
    }
  `}
`;
