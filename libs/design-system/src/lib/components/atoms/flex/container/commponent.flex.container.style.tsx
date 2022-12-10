import {ContainerProps} from './commponent.flex.container';
import styled, {css} from 'styled-components';

export const ContainerStyle = styled.div<ContainerProps>`
  ${({theme: {space, content}, full}) => css`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    padding-left: ${space.bases};
    padding-right: ${space.bases};
    max-width: ${full ? '100%' : content.maxWidth};
  `}
`;
