import styled, { css } from 'styled-components';

export const Article = styled.article`
  ${({ theme: { radiis } }) => css`
    width: 100%;
    height: fit-content;
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: ${radiis.default};
    border: var(--uxu-border-default);
  `}
`;


export const BoxImg = styled.div`
  ${({ theme: { motions, alphas, breakpoints } }) => css`
    width: 100%;
    height: 220px;
    opacity: 1;
    display: block;
    position: relative;
    transition: opacity ${motions.default};

    @media all and (min-width: ${breakpoints.s}px) {
      height: 250px;
    }

    &:hover {
      opacity: ${alphas.default};
    }
  `}
`;

export const BoxContent = styled.div`
  ${({ theme: { spaces, fontSizes, breakpoints } }) => css`
    width: 100%;
    height: 6.2rem;
    padding: ${spaces.default};
    display: flex;
    align-items: center;
    position: relative;
    border-top: var(--uxu-border-default);


    a {
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-weight: bold;
      font-size: ${fontSizes.default};
      overflow: hidden;
      white-space: unset;
      text-overflow: ellipsis;
      text-align: center;
    }

    @media all and (min-width: ${breakpoints.s}px) {
      height: 7.8rem;

      a {
        font-size: ${fontSizes.large};
      }
    }

  `}
`;
