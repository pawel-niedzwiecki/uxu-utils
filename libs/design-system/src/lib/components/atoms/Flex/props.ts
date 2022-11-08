import { FlexboxProps } from 'styled-system';

import { BoxProps } from 'ui/Box';

export interface FlexProps extends BoxProps {
  inline?: boolean;
  alignItems?: FlexboxProps['alignItems'];
  alignContent?: FlexboxProps['alignContent'];
  justifyContent?: FlexboxProps['justifyContent'];
  justifyItems?: FlexboxProps['justifyItems'];
  flexWrap?: FlexboxProps['flexWrap'];
  flexGrow?: FlexboxProps['flexGrow'];
  flexShrink?: FlexboxProps['flexShrink'];
  flexBasis?: FlexboxProps['flexBasis'];
  flex?: FlexboxProps['flex'];
  justifySelf?: FlexboxProps['justifySelf'];
  alignSelf?: FlexboxProps['alignSelf'];
  flexDirection?: FlexboxProps['flexDirection'];
}
