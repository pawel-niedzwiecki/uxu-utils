export type Arg =
  | {
      property: string;
      scale: string;
    }
  | boolean;

export type Args = { [key: string]: Arg };
