export type Nullable<T> = T | null | undefined;

export type MarkAsNotRequired<T, K extends keyof T> = T & {
  [P in K]?: T[P];
};

export type MarkAsRequired<T, K extends keyof T> = T & {
  [P in K]-?: T[P];
};

export type MarkAsNonNullable<T, K extends keyof T> = T & {
  [P in K]-?: NonNullable<T[P]>;
};

export type MarkAsNumberRequired<T, K extends keyof T> = T & {
  [P in K]-?: number;
};

export type MarkAsNumberNotRequired<T, K extends keyof T> = T & {
  [P in K]?: number;
};
