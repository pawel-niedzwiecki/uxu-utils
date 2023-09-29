import { FC } from 'react';
import { ContentPartPropsType } from './../../../types';

export type CodeChunk = FC<ContentPartPropsType>;

export function CodeChunk(): JSX.Element {
  return <p>CodeChunk</p>;
}
