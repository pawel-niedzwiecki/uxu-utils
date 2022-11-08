import { FC } from 'react';
import styled from 'styled-components';
import { grid } from 'styled-system';

import { GridProps } from './props';
import { Box } from 'ui/Box';

export const Grid: FC<GridProps> = ({ as, ...rest }) => (
  <StyledGrid forwardedAs={as} {...rest} />
);

Grid.defaultProps = {
  as: 'div',
};

const StyledGrid = styled(Box)<GridProps>`
  display: grid;
  ${grid};
`;
