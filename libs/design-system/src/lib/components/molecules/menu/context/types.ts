import React from "react";
import { MenuPosition } from "../types";

export type MenuContextValue = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menuPosition: MenuPosition;
  containerSize: { width: number, height: number };
}
