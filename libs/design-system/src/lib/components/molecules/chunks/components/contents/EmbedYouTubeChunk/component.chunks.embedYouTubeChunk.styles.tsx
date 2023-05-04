import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { spaces, radiis } }) => css`
    width: 100%;
    display: flex;
    overflow: hidden;
    justify-content: center;
    padding: ${spaces.default};
    border-radius: ${radiis.default};
    margin-bottom: ${spaces.default};
    background-color: var(--uxu-color-primary-accent2);
  `}
`;
