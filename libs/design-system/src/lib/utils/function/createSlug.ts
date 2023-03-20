import { kebabCase, deburr } from "lodash";
export const createSlug = (title: string) => kebabCase(deburr(title.toLowerCase()));
