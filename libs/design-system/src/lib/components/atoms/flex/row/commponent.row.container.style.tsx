import styled, { css } from 'styled-components';

export const RowStyle = styled.div`
  ${({ theme: { space } }) => css`
    display: flex;
    flex: 0 1 auto;
    flex-wrap: wrap;
    flex-direction: row;
    box-sizing: border-box;
    margin-left: ${space.bases};
    margin-right: ${space.bases};
  `}
`;
