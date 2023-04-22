import styled, { css } from 'styled-components';
import { ParamsAd } from './../../../assets';

export const Wrapper = styled.div<ParamsAd>`
  ${({ width, height }) => css`
    display: flex;
    margin: 0 auto;
    width: ${width};
    height: ${height};
    flex-direction: column;
    justify-content: center;
    background-color: var(--uxu-color-primary-accent2);

    &:before {
      content: 'UXU';
      font-weight: bold;
      font-size: 2.4rem;
      position: relative;
      text-align: center;
      color: var(--uxu-color-primary-accent1);
    }

    &:after {
      content: 'reklama';
      position: relative;
      text-align: center;
      color: var(--uxu-color-primary-accent1);
    }
  `}
`;
