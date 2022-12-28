import styled, { css } from 'styled-components';
import { SpecialProps } from './component.loading.dots.props';

export const Wrapper = styled.div<SpecialProps>`
  ${({theme: {spaces}, size}) => css`
    display: flex;
    position: relative;

    span {
      display: block;
      width: ${size}rem;
      height: ${size}rem;
      border-radius: 100%;
      margin: ${spaces.small};
      background-color: var(--uxu-color-primary-accent6);
      animation-name: loading-dots_blink;
      animation-duration: 1.4s;
      animation-fill-mode: both;
      animation-iteration-count: infinite;

      &:nth-child(2) {
        animation-delay: 0.2s;
      }

      &:nth-child(3) {
        animation-delay: 0.4s;
      }
    }

    @keyframes loading-dots_blink {
      0% {
        opacity: 0.2
      }
      20% {
        opacity: 1
      }
      to {
        opacity: 0.2
      }
    }
  `}
`
