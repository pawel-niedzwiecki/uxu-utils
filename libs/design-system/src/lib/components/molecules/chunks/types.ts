import { UXUChunkType } from './enums';

export type ContentPartPropsType = {
  id: string;
  type: UXUChunkType;
  value?: string;
  src?: string;
  caption?: string;
  alternativeText?: string;
};
