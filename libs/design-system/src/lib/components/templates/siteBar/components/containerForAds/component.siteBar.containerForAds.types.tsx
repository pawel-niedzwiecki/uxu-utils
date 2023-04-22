import type { PropsWithChildren } from 'react';

export type SpecialProps = {
  ads?: boolean;
};

export type ComponentProps = PropsWithChildren<SpecialProps>;
