import styled, { css } from 'styled-components';

export const Wrapper = styled.footer`
  ${({ theme: { spaces } }) => css`
    width: 100%;
    min-height: 25rem;
    padding: ${spaces.large} 0;
    border-top: var(--uxu-border-default);
    background-color: var(--uxu-color-primary-accent1);

    .brand {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    ul {
      list-style: none;
      padding-bottom: ${spaces.large};

      li {
        padding: ${spaces.small} 0;
      }
    }
  `}
`;

export const Header = styled.span`
  ${({ theme: { spaces } }) => css`
    display: block;
    font-weight: bold;
    padding-bottom: ${spaces.default};
  `}
`;
