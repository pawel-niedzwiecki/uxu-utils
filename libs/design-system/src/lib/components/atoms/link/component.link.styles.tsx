import styled, { css } from 'styled-components';
import { OtherProps } from './component.link.types';
import { listensPropsDisplay, listensPropsSize, listensPropsSpace } from './../../../utils';
import { btn } from './../../../components/atoms/button/component.button.styles';

const styleLink = css`
  ${({ theme: { motions } }) => css`
    transition: color ${motions.default};

    &:hover {
      color: var(--uxu-color-primary-accent5);
    }
  `}
`;

export const Wrapper = styled.a<OtherProps>`
  ${({ type, size, shape, align, color, variant }) => css`
    ${styleLink};
    ${type === 'button' && btn({ size, shape, align, color, variant })};
    ${listensPropsSize};
    ${listensPropsSpace};
    ${listensPropsDisplay};
  `}
`;
