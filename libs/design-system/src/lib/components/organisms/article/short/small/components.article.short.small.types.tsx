import { FC } from 'react';
import type { FunctionComponentDiv } from './../../../../../utils';


export type SpecialProps = {
  data: {
    isLoading: boolean
    content: {
      cover: { src: string | null, alt: string | null } | null
      title: string
      slug: string
    } | null
  }
}


export type Props = FC<FunctionComponentDiv & SpecialProps>;
