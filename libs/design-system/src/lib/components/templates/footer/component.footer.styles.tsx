import styled, { css } from 'styled-components';

export const Wrapper = styled.footer`
  ${({ theme: { spaces, breakpoints } }) => css`
    width: 100%;
    padding: ${spaces.large} 0;
    border-top: var(--uxu-border-default);
    background-color: var(--uxu-color-primary-accent1);

    .brand {
      display: flex;
      margin: 0 auto;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: ${spaces.large};

      p {
        display: none;
      }
    }

    p {
      font-weight: bold;

      a {
        padding-left: ${spaces.small};
      }
    }

    ul {
      list-style: none;
      padding-bottom: ${spaces.large};

      li {
        text-align: center;
        padding: ${spaces.small} 0;
      }
    }

    @media all and (min-width: ${breakpoints.s}px) {
      .brand {
        margin: 0;

        p {
          display: block;
        }
      }
    }

    @media all and (min-width: ${breakpoints.m}px) {
      ul {
        li {
          text-align: left;
        }
      }
    }
  `}
}
`;

export const Header = styled.span`
  ${({ theme: { spaces, breakpoints } }) => css`
    display: block;
    font-weight: bold;
    text-align: center;
    padding-bottom: ${spaces.default};

    @media all and (min-width: ${breakpoints.m}px) {
      text-align: left;
    }
  `}
`;
