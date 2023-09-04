import React from 'react';
import DynamicLink from 'next/link';
import classnames from 'classnames';

import { regexURL } from './../../../utils';
import type { LinkProps } from './types';

export function Link({ href, children, className, ...args }: LinkProps) {
  const isExternal = regexURL.test(href);
  const externalLinkProps = isExternal && { target: '_blank', rel: 'noopener noreferrer' };

  const linkClasses = classnames({ [className]: className });

  if (isExternal) {
    return (
      <a href={href} {...args} {...externalLinkProps} className={linkClasses}>
        {children}
      </a>
    );
  }

  return (
    <DynamicLink href={href} {...args} className={linkClasses}>
      {children}
    </DynamicLink>
  );
}
