import { FC } from 'react';
import { ContentPartPropsType } from './../../../types';

export type ListChunk = FC<ContentPartPropsType>;

export function ListChunk(): JSX.Element {
  return <p>ListChunk</p>;
}
