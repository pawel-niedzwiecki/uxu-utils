import {FC} from "react";
import {RegisterOptions} from 'react-hook-form';
import {FunctionComponentDiv} from '@uxu/types';

export type SpecialProps = {
  error?: boolean
}

export type Props = FC<FunctionComponentDiv & RegisterOptions & SpecialProps>
