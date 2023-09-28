import { Member, Size } from "../../atoms/avatar/types";

export type AvatarGroupProps  = {
  members: Array<Member>;
  className?: string;
} & Size
