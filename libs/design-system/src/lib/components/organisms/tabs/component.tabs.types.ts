import {FC, FormEvent} from "react";
import {FunctionComponentDiv} from '@uxu/types';


export type Tab = { title: string, value: (e: FormEvent<HTMLButtonElement>) => void | string,  icon: JSX.Element , active?: boolean | undefined};

export type SpecialProps = {
  tabs: Tab[]
}


export type Props = FC<FunctionComponentDiv & SpecialProps>;
