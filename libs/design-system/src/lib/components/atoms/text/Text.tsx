import { Ref, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { typography } from 'styled-system';

import { TextProps } from './props';
import { Box } from 'ui/Box';

// eslint-disable-next-line react/display-name
export const Text = forwardRef((props: TextProps, ref: Ref<HTMLElement>) => {
  const { as, ...rest } = props;
  return <StyledText ref={ref} forwardedAs={as} {...rest} />;
});

Text.defaultProps = {
  as: 'span',
  fontSize: 'fs24',
  lineHeight: 'lh40',
};

const StyledText = styled(Box)<TextProps>`
  text-transform: ${({ textTransform }) => textTransform};
  text-decoration: ${({ textDecoration }) => textDecoration};
  ${typography}

  ${({ before }) =>
    before &&
    css`
      &::before {
        content: '${before}';
      }
    `};

  ${({ after }) =>
    after &&
    css`
      &::after {
        content: '${after}';
      }
    `};
`;
