export type Size = { size: "small" | "large" | "default" }

export type Member = {
  avatar?: {
    src?: string;
    alt?: string;
  };
  title?: string;
}

export type AvatarProps = Size & Member
