import styled, { css } from 'styled-components';

const styleList = css`
  list-style: none;
  margin-bottom: 1.5rem;
`;

export const Wrapper = styled.div<{ open: boolean, hiddeMenu: boolean }>`
  ${({ open, hiddeMenu, theme: { motions, breakpoints, spaces, borders } }) => css`
    top: 0;
    left: ${open ? '0rem' : '-25rem'};
    width: 25rem;
    height: 100%;
    z-index: 999999;
    position: fixed;
    padding: ${spaces.default};
    border-right: ${borders.default};
    transition: left ${motions.default};
    background-color: var(--uxu-color-primary-accent1);

    .switch {
      width: 40px;
      height: 40px;
      left: 24.9rem;
      top: ${hiddeMenu ? spaces.default : '180px'};
      padding: 0;
      display: block;
      position: absolute;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-top: ${borders.default};
      border-right: ${borders.default};
      border-bottom: ${borders.default};
      background-color: var(--uxu-color-primary-accent1);

      svg {
        transform: ${open ? 'rotate(180deg)' : 'rotate(0deg)'};
      }
    }

    @media all and (min-width: ${breakpoints.s}px) {
      .switch {
        top: ${hiddeMenu ? spaces.default : '125px'};
      }
    }


    @media all and (min-width: ${breakpoints.m}px) {
      left: auto;
      width: 25rem;
      padding: 0;
      border: none;
      position: relative;
      background-color: transparent;

      .switch {
        display: none;
      }
    }
  `}
`;


export const Box = styled.div<{ top: number }>`
  ${({ top, theme: { motions, breakpoints } }) => css`
    top: 0px;
    transition: top ${motions.default};

    @media all and (min-width: ${breakpoints.m}px) {
      top: ${top}px;
      display: flex;
      position: sticky;
      flex-direction: column;
    }
  `}
`;


export const Header = styled.p`
  ${({ theme: { spaces } }) => css`
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    margin: ${spaces.default} 0;

    &:first-of-type {
      height: 3rem;
    }
  `}
`;

export const BoxCover = styled.ul`
  ${styleList}
`;

export const BoxImg = styled.div`
  ${({ theme: { radiis } }) => css`
    width: 100%;
    height: 13rem;
    overflow: hidden;
    position: relative;
    border-radius: ${radiis.default};
  `}
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
        display: flex;
        font-size: 1rem;
        align-items: center;
        justify-content: center;
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
