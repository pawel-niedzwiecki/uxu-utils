import type { PropsWithChildren } from 'react';
import type { HeaderDataTypes } from '../../../component.header.types';

type OtherProps = {
  isMobile?: boolean;
  scroll?: boolean;
} & HeaderDataTypes.Res &
  HeaderDataTypes.CallBackSearch;

export type ComponentProps = PropsWithChildren<OtherProps>;
