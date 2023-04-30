import { FC, ReactElement } from 'react';
import type { ContentPartPropsType } from './../../../types';

export type ChunkComponent = () => JSX.Element;

export type GetChunkComponentType = {
  props: ContentPartPropsType;
  ChunkComponent: ChunkComponent | null;
};

interface CustomProps {
  chunkComponents: GetChunkComponentType[];
}

export type ParseContentPartToChunkProps = {
  contentParts: ContentPartPropsType[];
  children: (customProps: CustomProps) => ReactElement;
};

export type ComponentPropsType = FC<ParseContentPartToChunkProps>;
