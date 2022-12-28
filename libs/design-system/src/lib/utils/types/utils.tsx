export type Nullable<T> = T | null | undefined;

export type ObjectMapType<T> = {
  [key: string]: T
};

export type MarkAsNumberNotRequired<T> = {
  [P in keyof T]?: number;
};
