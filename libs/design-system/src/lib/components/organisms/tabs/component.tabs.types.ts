import { FC, FormEvent } from 'react';
import type { FunctionComponentDiv } from './../../../utils';


export type Tab = { title: string, value: string, icon: JSX.Element, active?: boolean | undefined };


export type SpecialProps = {
  tabs: Tab[]
}


export type Props = FC<FunctionComponentDiv & SpecialProps>;
