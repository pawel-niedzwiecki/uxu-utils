import { FC } from 'react';
import { ContentPartPropsType } from './../../../types';

export type EmptyChunk = FC<ContentPartPropsType>;

export function EmptyChunk(props: ContentPartPropsType): JSX.Element {
  return <></>;
}
