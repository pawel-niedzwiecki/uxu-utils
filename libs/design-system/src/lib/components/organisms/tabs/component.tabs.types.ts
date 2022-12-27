import {Icon} from 'react-feather';
import {FC, FormEvent} from "react";
import {FunctionComponentDiv} from '@uxu/types';


export type Tab = { title: string, value: (e: FormEvent<HTMLButtonElement>) => void | string,  icon: Icon };

export type SpecialProps = {
  tabs: Tab[]
}


export type Props = FC<FunctionComponentDiv & SpecialProps>;
