import type { ChunkComponentWithPropsInObject } from './../../../types';

export function transformChunkToComponent({ ChunkComponent, props }: ChunkComponentWithPropsInObject): JSX.Element {
  return <ChunkComponent {...props} />;
}
