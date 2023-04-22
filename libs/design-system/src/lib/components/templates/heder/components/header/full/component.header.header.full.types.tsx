import type { PropsWithChildren } from 'react';
import type { HeaderDataTypes } from '../../../component.header.types';

type OtherProps = {
  isMobile?: boolean;
} & HeaderDataTypes.Res &
  HeaderDataTypes.CallBackSearch &
  HeaderDataTypes.Tabs &
  HeaderDataTypes.Alert;

export type ComponentProps = PropsWithChildren<OtherProps>;
