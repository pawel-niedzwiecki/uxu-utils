import { FC } from 'react';
import { ContentPartPropsType } from './../../../types';

export type TableChunk = FC<ContentPartPropsType>;

export function TableChunk(): JSX.Element {
  return <p>TableChunk</p>;
}
