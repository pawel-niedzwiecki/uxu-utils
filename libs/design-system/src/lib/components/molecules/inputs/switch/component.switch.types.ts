import { FC } from 'react';
import { RegisterOptions } from 'react-hook-form';


export type SpecialProps = {
  error?: boolean
}

export type Props = FC<RegisterOptions & SpecialProps>
