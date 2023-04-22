import type { PropsWithChildren } from 'react';
import type { Slot } from './../../../assets';

export type SpecialProps = {
  slot: Slot;
};

export type ComponentProps = PropsWithChildren<SpecialProps>;
