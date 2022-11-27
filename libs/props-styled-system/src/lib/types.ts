import { createStyleFunction}  from 'core'

export type Arg =  {
  property: string;
  scale: string;
} | boolean | string | string[] | typeof createStyleFunction

export type Args = { [key: string]: Arg };

