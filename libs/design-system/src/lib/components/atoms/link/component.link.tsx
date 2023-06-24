import React from 'react';
import { regexURL } from './../../../utils';
import { LoadingWheel } from './../../../components';
import type { ComponentLinkType } from './component.link.types';
import { Wrapper } from './component.link.styles';

export const Link: ComponentLinkType = ({ children, style, ...args }, props) => {
  const url = regexURL.test(args.href) && { target: '_blank', rel: 'noopener noreferrer' };
  const content =
    args.variant === 'loading' ? (
      <>
        <LoadingWheel size={2} style={{ marginRight: '0.75rem' }} /> Loading
      </>
    ) : (
      <>
        {args?.prefix}
        {children}
        {args?.suffix}
      </>
    );

  return (
    <Wrapper {...args} {...props} {...url} style={style}>
      {content}
    </Wrapper>
  );
};
