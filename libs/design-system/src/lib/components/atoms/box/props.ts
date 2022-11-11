import { AriaAttributes, ReactNode, CSSProperties, MouseEvent } from 'react';

import { Theme, Colors, Radii, Space, Shadows } from 'theme';

export type ColorsType = keyof Colors;
export type SpaceType = keyof Space;

export interface MarginProps {
  /** Margin on top, left, bottom and right */
  m?: SpaceType;
  /** Margin on top */
  mt?: SpaceType;
  /** Margin on right */
  mr?: SpaceType;
  /** Margin on bottom */
  mb?: SpaceType;
  /** Margin on left */
  ml?: SpaceType;
  /** Margin on left and right */
  mx?: SpaceType;
  /** Margin on top and bottom */
  my?: SpaceType;
}

export interface PaddingProps {
  /** Padding on top, left, bottom and right */
  p?: SpaceType;
  /** Padding on top, left, bottom and right */
  padding?: SpaceType;
  /** Padding on top */
  pt?: SpaceType;
  /** Padding on top */
  paddingTop?: SpaceType;
  /** Padding on right */
  pr?: SpaceType;
  /** Padding on right */
  paddingRight?: SpaceType;
  /** Padding on bottom */
  pb?: SpaceType;
  /** Padding on bottom */
  paddingBottom?: SpaceType;
  /** Padding on left */
  pl?: SpaceType;
  /** Padding on left */
  paddingLeft?: SpaceType;
  /** Padding on left and right */
  px?: SpaceType;
  /** Padding on left and right */
  paddingX?: SpaceType;
  /** Padding on top and bottom */
  py?: SpaceType;
  /** Padding on top and bottom */
  paddingY?: SpaceType;
}

export interface SpaceProps extends MarginProps, PaddingProps {}

export interface BoxProps extends SpaceProps, AriaAttributes {
  /**
   * Property to allow deeply passing a different "as" prop value to underlying components, ex. `<Text as="p">Text content</Text>`
   */

  as?: keyof JSX.IntrinsicElements;

  /**
   * Property to allow deeply passing a different "as" prop value to underlying components when using styled() as a higher-order component
   */

  forwardedAs?: keyof JSX.IntrinsicElements;

  /**
   * Property from theme.colors
   */
  color?: ColorsType;
  /**
   * Property from theme.colors
   */
  backgroundColor?: ColorsType;
  /**
   * Property from theme.colors
   */
  boxShadow?: keyof Shadows;
  /**
   * Property from theme.radii
   */
  borderRadius?: keyof Radii;
  /**
   * Provided by ThemeProvider https://styled-components.com/docs/advanced
   */
  theme?: Theme;
  children?: ReactNode;
  /**
   * WAI-ARIA
   */
  role?: string;
  /**
   * Custom styles - use them only in special cases, don't use if you need any of theme values.
   *
   * Example of correct use ✅: `css={{ alignSelf: 'center' }}`
   * Example of incorrect use ❌: `css={{ backgroundColor: '#1d1d1d' }}` - you should use `backgroundColor="dark"`
   */
  style?: CSSProperties;
  className?: string;
  tabIndex?: number;
  onMouseEnter?: (e?: MouseEvent) => void;
  onMouseLeave?: (e?: MouseEvent) => void;
  onClick?: (e?: MouseEvent) => void;
  onMouseDown?: (e: MouseEvent) => void;
  onMouseUp?: (e: MouseEvent) => void;
}
