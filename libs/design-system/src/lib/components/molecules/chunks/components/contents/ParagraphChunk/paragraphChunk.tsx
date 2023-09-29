import { FC } from 'react';
import styles from './paragraphChunk.module.scss';
import { ContentPartPropsType } from './../../../types';

export type ParagraphChunk = FC<ContentPartPropsType>;

export function ParagraphChunk(props: ContentPartPropsType): JSX.Element {
  const value = props?.value || '';
  return <div className={styles.wrapper} key={`paragraphChunk-${props.id}`}>{value}</div>;
}
