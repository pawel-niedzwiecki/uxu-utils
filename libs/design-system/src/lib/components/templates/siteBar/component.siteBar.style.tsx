import styled, { css } from 'styled-components';
import { motions } from '../../../theme';


const styleList = css`
  list-style: none;
  margin-bottom: 1.5rem;
`;

export const Wrapper = styled.div`
  position: relative;
`;


export const Box = styled.div<{ top: number }>`
  ${({ top, theme: { motions } }) => css`
    top: ${top}px;
    display: flex;
    position: sticky;
    flex-direction: column;`}
  transition: top ${motions.default};
`;


export const Header = styled.p`
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const BoxCover = styled.ul`
  ${styleList}
`;

export const BoxMenu = styled.ul`
  ${styleList}
`;


export const BoxSocialMedia = styled.ul`
  ${({ theme: { spaces } }) => css`
    ${styleList}
    display: flex;
    flex-wrap: wrap;

    li {
      width: 25%;
      padding: 0 ${spaces.small} ${spaces.small} ${spaces.small};

      a {
        width: 100%;
        display: block;
      }

      &:first-of-type {
        width: 100%;
      }
    }
  `}
`;


export const Item = styled.li`
  ${({ theme: { spaces } }) => css`
    display: flex;
    margin-bottom: ${spaces.small};
    justify-content: flex-start;

    a, button {
      width: 70%;
    }

    span {
      width: 30%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:first-of-type {
      margin-bottom: 0;
    }
  `};
`;
