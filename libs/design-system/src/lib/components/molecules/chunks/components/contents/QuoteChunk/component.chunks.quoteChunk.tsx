import { FC } from 'react';
import { ContentPartPropsType } from './../../../types';

export type QuoteChunk = FC<ContentPartPropsType>;

export function QuoteChunk(): JSX.Element {
  return <p>QuoteChunk</p>;
}
