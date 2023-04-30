import { CodeChunk, EmbedChunk, GalleryChunk, HeaderChunk, IMGChunk, ListChunk, ParagraphChunk, QuoteChunk, TableChunk } from '../contents';
import { UXUChunkType } from '../../enums';

export const chunksMap = new Map([
  [UXUChunkType.PARAGRAPH, ParagraphChunk],
  [UXUChunkType.HEADER, HeaderChunk],
  [UXUChunkType.IMG, IMGChunk],
  [UXUChunkType.QUOTE, QuoteChunk],
  [UXUChunkType.LIST, ListChunk],
  [UXUChunkType.CODE, CodeChunk],
  [UXUChunkType.EMBED, EmbedChunk],
  [UXUChunkType.TABLE, TableChunk],
  [UXUChunkType.GALLERY, GalleryChunk],
]);
