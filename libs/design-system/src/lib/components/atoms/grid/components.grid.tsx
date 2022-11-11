import { FC } from 'react';
import styled from 'styled-components';
import { grid } from 'styled-system';

import { GridProps } from './props';
import { Box } from 'ui/Box';

export const ComponentsGrid: FC<GridProps> = ({ as, ...rest }) => <StyledGrid forwardedAs={as} {...rest} />;

ComponentsGrid.defaultProps = {
  as: 'div',
};

const StyledGrid = styled(Box)<GridProps>`
  display: grid;
  ${grid};
`;
