import type { ObjectMapType } from './../../utils';

export const keys = <Type>(obj: ObjectMapType<Type>): string[] => Object.keys(obj);


