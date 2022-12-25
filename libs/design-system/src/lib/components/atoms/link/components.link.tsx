import React from 'react';
import {regexURL} from "@uxu/utils";
import type {Props} from './components.link.types';
import {Url, Slug} from './components.link.style';
import {LoadingWheel} from "components/atoms/loading";


export const Link: Props = ({children, ...args}, props) => {
  const url = regexURL.test(args?.href);
  const content = args.variant === 'loading' ? <><LoadingWheel size={2} style={{marginRight: "0.75rem"}}/> Loading</> : <>{args?.prefix}{children}{args?.suffix}</>;
  if (url) return <Url {...args} {...props} target="_blank" rel="noopener noreferrer">{content}</Url>;
  else return <Slug {...args} {...props}>{content}</Slug>;
}

