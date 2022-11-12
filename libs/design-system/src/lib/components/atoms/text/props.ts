import { FontSizes, FontWeights, LineHeights } from 'theme';
import { BoxProps } from 'ui/Box';

export interface TextProps extends BoxProps {
  fontSize?: keyof FontSizes;
  fontWeight?: keyof FontWeights;
  fontStyle?: 'normal' | 'italic';
  lineHeight?: keyof LineHeights;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
  textDecoration?: 'line-through' | 'underline' | 'none';
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  before?: string;
  after?: string;
  dangerouslySetInnerHTML?: { __html: string };
}
