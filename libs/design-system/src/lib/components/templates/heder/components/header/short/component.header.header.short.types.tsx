import type { PropsWithChildren } from 'react';
import type { HeaderDataTypes } from './../../../component.header.types';

type OtherProps = {
  isMobile?: boolean;
} & HeaderDataTypes;

export type ComponentProps = PropsWithChildren<OtherProps>;
