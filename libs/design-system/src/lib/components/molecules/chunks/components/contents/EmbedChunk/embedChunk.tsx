import { FC } from 'react';
import { ContentPartPropsType } from './../../../types';

export type EmbedChunk = FC<ContentPartPropsType>;

export function EmbedChunk(): JSX.Element {
  return <p>EmbedChunk</p>;
}
