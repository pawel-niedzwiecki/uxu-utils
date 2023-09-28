import { Position, Size } from "../types";

export const calculatePosition = (menuPosition: string, menuPopupSize: Size, containerSize: Size): Position => {
  let topValue: string | number = 0;
  let leftValue: string | number = 0;

  switch (menuPosition) {
    case 'bottom':
      topValue = `${containerSize.height}px`;
      break;
    case 'top':
      topValue = `-${menuPopupSize.height}px`;
      break;
    case 'left':
    case 'right':
      topValue = `-${menuPopupSize.height / 2}px`;
      leftValue = menuPosition === 'left' ? -menuPopupSize.width : containerSize.width;
      break;
    default:
      break;
  }

  return { top: topValue, left: leftValue };
};
