export type Tag = {
  id: string;
  title: string;
  slug: string;
}

export type TagListProps = {
  tags: Array<Tag>
}
