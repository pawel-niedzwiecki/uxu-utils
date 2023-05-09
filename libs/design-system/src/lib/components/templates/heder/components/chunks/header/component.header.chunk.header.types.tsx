import type { ComponentWithProps } from "./../../../../../../utils";
import type { CallBack, Query, ResData } from "./../../../../../organisms/form/search/component.search.types";


type ChunkHeaderProps = {
  isMobile?: boolean;
  scroll?: boolean;
  res: {
    data: ResData;
    query: Query;
  }
  callBack: CallBack;
}

export type ComponentChunkHeaderType = ComponentWithProps<ChunkHeaderProps>;
