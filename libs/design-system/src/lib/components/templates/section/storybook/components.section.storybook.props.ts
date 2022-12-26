import {FC} from "react";
import {FunctionComponentDiv} from '@uxu/types';

export type SpecialProps = {
  title: string;
  description: string;
}

export type Props = FC<FunctionComponentDiv & SpecialProps>
