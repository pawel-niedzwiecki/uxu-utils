import React, { ReactNode } from "react";

export type TreeProps = {
  full?: boolean;
  activeSlug: string;
  children: ReactNode;
}

export type ITreeContext = {
  full: boolean;
  activeSlug: string;
  activeBranch: string | null;
  setActiveBranch: React.Dispatch<React.SetStateAction<string | null>>;
}

export type BranchProps = {
  title: string;
  children?: ReactNode;
  url: string;
  active?: boolean;
}
