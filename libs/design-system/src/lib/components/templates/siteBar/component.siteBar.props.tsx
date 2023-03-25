import { FC } from 'react';
import type { FunctionComponentDiv } from './../../../utils';

export type CoverProps = {
  isLoading: boolean
  img: { url: string, alt: string } | null
} | null

export type FilterProps = {
  isLoading: boolean
  links: { slug: string, title: string, score: number, active: boolean }[] | null
} | null

export type SocialMediaProps = { isLoading: boolean, list: { url: string, typ: string }[] } | null


export type SpecialProps = {
  cover?: CoverProps
  filter?: FilterProps
  socialMedia?: SocialMediaProps

}

export type Props = FC<FunctionComponentDiv & SpecialProps>
