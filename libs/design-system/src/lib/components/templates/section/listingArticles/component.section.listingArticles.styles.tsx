import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme: { spaces } }) => css`
    min-height: calc(100vh - 32rem);
    margin-bottom: ${spaces.large};
  `}
`;

