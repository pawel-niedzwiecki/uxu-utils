import styled, { css } from 'styled-components';
import ReactMarkdown from 'react-markdown';

export const Wrapper = styled(ReactMarkdown)`
  ${({ theme: { spaces } }) => css`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      padding-bottom: ${spaces.large};
    }

    p,
    q,
    .img,
    .lead {
      display: block;
      position: relative;
      margin-bottom: ${spaces.default};
    }

    p,
    q {
      width: 100%;
      position: relative;
    }
  `}
`;
