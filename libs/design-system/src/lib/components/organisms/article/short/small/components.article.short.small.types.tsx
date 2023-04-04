import { FC } from 'react';
import type { FunctionComponentDiv } from './../../../../../utils';


export type SpecialProps = {
  data: {
    isLoading: boolean
    content: {
      cover?: { src?: string, alt?: string }
      title?: string
      slug?: string
    }
  }
}


export type Props = FC<FunctionComponentDiv & SpecialProps>;
