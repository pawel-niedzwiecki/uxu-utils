import { ContentPartPropsType } from './../../../molecules/chunks';
import { ArticleShortDataType } from './../../../organisms/article/short/components.article.short.types';

export type RenderListContentProps = {
  list?: Array<ArticleShortDataType>
}

export type MainContentProps = {
  main?: {
    title: string;
    lead: string;
    slug?: string;
    cover?: { src?: string; alt?: string };
    contentparts?: ContentPartPropsType[ ];
  }
}

export type SectionLeadPostWithListProps = RenderListContentProps & MainContentProps
