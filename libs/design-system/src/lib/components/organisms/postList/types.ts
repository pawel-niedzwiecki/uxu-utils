import { Member } from "../../atoms/avatar/types";

export type PostListProps = {
  title: string;
  cover?: {
    alt?: string;
    src?: string;
  };
  slug: string;
  authors?: Array<Member>;
}
