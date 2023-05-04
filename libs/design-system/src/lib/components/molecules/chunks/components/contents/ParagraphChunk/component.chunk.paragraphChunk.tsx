import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { ContentPartPropsType } from './../../../types';

export type ParagraphChunk = FC<ContentPartPropsType>;

export function ParagraphChunk(props: ContentPartPropsType): JSX.Element {
  const value = props?.value || '';

  return <ReactMarkdown>{value}</ReactMarkdown>;
}
