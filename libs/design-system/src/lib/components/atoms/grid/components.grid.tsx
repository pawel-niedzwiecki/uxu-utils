import { GridProps } from './props';
import styled from 'styled-components';
import { FC } from 'react';

export const ComponentsGrid: FC<GridProps> = ({ as, ...rest }) => <StyledGrid forwardedAs={as} {...rest} />;

ComponentsGrid.defaultProps = {
  as: 'div',
};

const StyledGrid = styled(Box)<GridProps>`
  display: grid;
`;
