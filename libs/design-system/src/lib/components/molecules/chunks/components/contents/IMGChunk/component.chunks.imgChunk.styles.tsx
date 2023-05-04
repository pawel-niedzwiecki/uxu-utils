import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { fontSizes, spaces, radiis } }) => css`
    width: 100%;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    padding: ${spaces.default};
    border-radius: ${radiis.default};
    margin-bottom: ${spaces.default};
    background-color: var(--uxu-color-primary-accent2);

    span {
      font-size: ${fontSizes.small};
      padding-top: ${spaces.default};
      color: var(--uxu-color-primary-accent4);
    }

    img {
      border-radius: ${radiis.default};
    }
  `}
`;
