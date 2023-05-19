import styled, { css } from 'styled-components';


export const Wrapper = styled.div`
  ${( {theme: {breakpoints}} ) => css`width: 100%;
    display: grid;
    grid-gap: 1.5rem;
    padding-bottom: 1.5rem;
    grid-template-columns: 100%;

    @media all and (min-width: ${breakpoints.s}px) {
      grid-template-columns: 60% 6rem 1fr;
    }

    button {
      color: white;

      &:hover {
        color: white;
      }

      &:nth-child(1) {
        background-color: var(--uxu-color-success-dark);
      }

      &:nth-child(2) {
        background-color: var(--uxu-color-success-light);
      }

      &:nth-child(1), &:nth-child(2) {
        &:hover {
          background-color: var(--uxu-color-success-default);
        }
      }

      &:nth-child(3) {
        background-color: var(--uxu-color-primary-accent3);

        &:hover {
          background-color: var(--uxu-color-primary-accent4);
        }

        svg {
          fill: transparent;

          path {
            color: white;
          }
        }
      }

      svg {
        width: 3rem;
        height: 3rem;
        fill: white;

        path {
          color: transparent;
        }
      }

      span {
        width: 100%;
        display: block;
      }
    }
  `}
`;
