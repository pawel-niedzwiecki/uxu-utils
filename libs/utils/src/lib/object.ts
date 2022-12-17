import type {ObjectMapType} from "@uxu/types";

export const keys = <Type>(obj: ObjectMapType<Type>): string[] => Object.keys(obj);

