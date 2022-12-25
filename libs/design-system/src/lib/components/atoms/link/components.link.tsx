import React, {useEffect} from 'react';
import type {Props} from './components.link.types';
import {Url, Slug} from './components.link.style';
import {regexURL} from "@uxu/utils";

export const Link: Props = ({children, ...args}, props) => {
  console.log(regexURL.test(args.href), 'regexURL.test(args.href)')
  if (regexURL.test(args.href)) return <Url {...args} {...props} target="_blank" rel="noopener noreferrer">{children}</Url>
  else return <Slug {...args} {...props}>{children}</Slug>
}

