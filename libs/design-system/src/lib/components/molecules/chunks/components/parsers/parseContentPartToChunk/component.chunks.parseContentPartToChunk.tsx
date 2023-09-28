import React from 'react';
import { compose, map } from 'ramda';
import { chunksMap } from '../../maps';
import { EmptyChunk } from '../../contents';
import type { ChunkComponentWithPropsInObject, ComponentParseContentPartToChunkType, ContentPartPropsType } from './../../../types';

export const ParseContentPartToChunk: ComponentParseContentPartToChunkType = ({ children, contentParts }) => {
  const getChunkComponent = (contentPart: ContentPartPropsType): ChunkComponentWithPropsInObject => {
    return {
      props: contentPart,
      ChunkComponent: contentPart?.type !== undefined ? chunksMap.get(contentPart.type) || EmptyChunk : EmptyChunk,
    };
  };

  const transformContentPartToChunkComponent = compose(getChunkComponent);

  const parseAndFilterContentParts = (contentParts: ContentPartPropsType[]) => map(transformContentPartToChunkComponent, contentParts);

  const chunkComponents: Array<ChunkComponentWithPropsInObject> = parseAndFilterContentParts(contentParts);

  return (<>{children({ chunkComponents })}</>);
};
