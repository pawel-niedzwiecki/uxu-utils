import styled, { css } from 'styled-components';
import { ContainerProps } from './commponent.flex.container';

export const ContainerStyle = styled.div<ContainerProps>`
  ${({ theme: { space, content } }) => css`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    padding-left: ${space.bases};
    padding-right: ${space.bases};
    max-width: ${(full) => (full ? '100%' : content.maxWidth)};
  `}
`;
