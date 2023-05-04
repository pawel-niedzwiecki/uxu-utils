import { CodeChunk, EmbedChunk, GalleryChunk, HeaderChunk, IMGChunk, ListChunk, ParagraphChunk, QuoteChunk, TableChunk } from '../contents';
import { ContentPartTypeEnum } from '../../enums';

export const chunksMap = new Map([
  [ContentPartTypeEnum.PARAGRAPH, ParagraphChunk],
  [ContentPartTypeEnum.HEADER, HeaderChunk],
  [ContentPartTypeEnum.IMG, IMGChunk],
  [ContentPartTypeEnum.QUOTE, QuoteChunk],
  [ContentPartTypeEnum.LIST, ListChunk],
  [ContentPartTypeEnum.CODE, CodeChunk],
  [ContentPartTypeEnum.EMBED, EmbedChunk],
  [ContentPartTypeEnum.TABLE, TableChunk],
  [ContentPartTypeEnum.GALLERY, GalleryChunk],
]);
