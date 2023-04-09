import styled, { css } from 'styled-components';


export const Wrapper = styled.div`
  ${({ theme: { spaces, fontSizes, radiis } }) => css`
    width: 100%;
    color: black;
    display: block;
    font-weight: bold;
    text-align: center;
    padding: ${spaces.default};
    border: var(--uxu-border-warning-default);
    background-color: var(--uxu-color-warning-light);

    a {
      color: white;
      display: block;
      background-color: black;
      font-size: ${fontSizes.large};
      margin-bottom: ${spaces.small};
      border-radius: ${radiis.default};
      padding: ${spaces.small} ${spaces.default};

      &:hover {
        color: black;
        background-color: white;
      }
    }

    span {
      display: block;
    }
  `}
`;
