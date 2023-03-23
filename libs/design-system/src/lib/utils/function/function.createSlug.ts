import { deburr, kebabCase } from 'lodash';

export const functionCreateSlug = (title: string) => kebabCase(deburr(title.toLowerCase()));
