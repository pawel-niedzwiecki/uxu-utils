import Link from "next/link";
import styled, {css} from 'styled-components'
import {SpecialProps} from './components.link.types'
import {btn} from 'components/atoms/button/commponent.button.style'


function buttonStyle({size, shape, align, color, variant}: SpecialProps) {
  if (variant) return btn({size, shape, align, color, variant})
}

export const Url = styled.a<SpecialProps>`
  ${({size, shape, align, color, variant}) => css`
    ${buttonStyle({size, shape, align, color, variant})}
  `}

`;

export const Slug = styled(Link)<SpecialProps>`
  ${({size, shape, align, color, variant}) => css`
    ${buttonStyle({size, shape, align, color, variant})}
  `}
`;
