import styled, { css } from 'styled-components';
import { SpecialProps } from './component.link.types';
import { listensPropsDisplay, listensPropsSize, listensPropsSpace } from './../../../utils';
import { btn } from './../../../components/atoms/button/component.button.style';
import Link from 'next/link';


const styleLink = css`
  ${({ theme: { motions } }) => css`
    transition: color ${motions.default};

    &:hover {
      color: var(--uxu-color-primary-accent5);
    }`}
`;

export const Url = styled.a<SpecialProps>`
  ${({ type, size, shape, align, color, variant }) => css`
    ${styleLink};
    ${type === 'button' && btn({ size, shape, align, color, variant })};
    ${listensPropsSize};
    ${listensPropsSpace};
    ${listensPropsDisplay};
  `}

`;

export const Slug = styled(Link)<SpecialProps>`
  ${({ type, size, shape, align, color, variant }) => css`
    ${styleLink};
    ${type === 'button' && btn({ size, shape, align, color, variant })};
    ${listensPropsSize};
    ${listensPropsSpace};
    ${listensPropsDisplay};
  `}
`;
