import { FC } from 'react';
import { ContentPartPropsType } from './../../../types';

export type HeaderChunk = FC<ContentPartPropsType>;

export function HeaderChunk(): JSX.Element {
  return <p>HeaderChunk</p>;
}
