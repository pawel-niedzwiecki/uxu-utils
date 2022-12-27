import {FC} from "react";
import {FunctionComponentDiv} from '@uxu/types';
import {ColorProps, BorderProps} from '@uxu/props-styled-system'


export type SpecialProps = {
  full?: boolean;
};

export type Props = FC<FunctionComponentDiv & ColorProps & BorderProps & SpecialProps>
