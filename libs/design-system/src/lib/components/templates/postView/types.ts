
import { ContentPartPropsType } from '../../molecules/chunks';
import type { Member } from '../../atoms/avatar/types';
import type { Tag } from '../../atoms/tagList/types';

export type PostViewData = {
  id?: string;
  lead?: string;
  type?: string;
  title?: string;
  createdAt?: Date;
  cover?: { src?: string; alt?: string; caption?: string };
  authors?: Array<Member>;
  tags?: Array<Tag>;
  stats?: { ratings?: number; comments?: number; views?: number };
  contentparts?: ContentPartPropsType[];
};

export type PostViewProps = {
  postViewData: PostViewData;
};
