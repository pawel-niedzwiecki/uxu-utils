import { Link } from './../link/component.link';
import styled, { css } from 'styled-components';
import { SpecialProps } from './component.link.types';
import { listensPropsSize , listensPropsDisplay, listensPropsSpace} from './../../../utils';

import { btn } from './../../../components/atoms/button/component.button.style';


export const Url = styled.a<SpecialProps>`
  ${({size, shape, align, color, variant}) => css`
    ${btn({size, shape, align, color, variant})};
    ${listensPropsSize};
    ${listensPropsSpace};
    ${listensPropsDisplay};
  `}

`;

export const Slug = styled.div<SpecialProps>`
  ${({size, shape, align, color, variant}) => css`
    ${btn({size, shape, align, color, variant})};
    ${listensPropsSize};
    ${listensPropsSpace};
    ${listensPropsDisplay};
  `}
`;
