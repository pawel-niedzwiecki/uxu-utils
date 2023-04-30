import React from 'react';
import { compose, map } from 'ramda';
import { chunksMap } from '../../maps';
import type { ContentPartPropsType } from '../../../types';
import type { ComponentPropsType, GetChunkComponentType } from './component.chunks.parseContentPartToChunk.types';

export const ParseContentPartToChunk: ComponentPropsType = ({ children, contentParts }) => {
  const getChunkComponent = (contentPart: ContentPartPropsType): GetChunkComponentType => ({
    props: contentPart,
    ChunkComponent: chunksMap.get(contentPart.type) || null,
  });

  const transformContentPartToChunkComponent = compose(getChunkComponent);
  
  const parseAndFilterContentParts = (contentParts: ContentPartPropsType[]) => map(transformContentPartToChunkComponent, contentParts);

  const chunkComponents: GetChunkComponentType[] = parseAndFilterContentParts(contentParts);

  return <div>{children({ chunkComponents })}</div>;
};
