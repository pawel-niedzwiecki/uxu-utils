import { FC } from 'react';
import { Wrapper } from './component.chunk.paragraphChunk.styles';
import { ContentPartPropsType } from './../../../types';

export type ParagraphChunk = FC<ContentPartPropsType>;

export function ParagraphChunk(props: ContentPartPropsType): JSX.Element {
  const value = props?.value || '';
  return <Wrapper key={`paragraphChunk-${props.id}`}>{value}</Wrapper>;
}
