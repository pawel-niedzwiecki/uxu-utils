import Link from "next/link";
import styled, {css} from 'styled-components'
import {SpecialProps} from './component.link.types'
import {listensPropsSize} from "@uxu/props-styled-system";
import {btn} from 'components/atoms/button/component.button.style'


const buttonStyle = ({size, shape, align, color, variant}: SpecialProps) => {
  if (variant) return btn({size, shape, align, color, variant})
  else return {
    transitionProperty: `all`,
    transitionTimingFunction: `ease`,
    transitionDuration: `var(--uxu-motions-default)`,

    '&:hover': {
      opacity: `var(--uxu-alpha-default)`,
    }
  }
}

export const Url = styled.a<SpecialProps>`
  ${({size, shape, align, color, variant}) => css`
    width: max-content;
    ${listensPropsSize};
    ${buttonStyle({size, shape, align, color, variant})};
  `}

`;

export const Slug = styled(Link)<SpecialProps>`
  ${({size, shape, align, color, variant}) => css`
    width: max-content;
    ${listensPropsSize};
    ${buttonStyle({size, shape, align, color, variant})};
  `}
`;
