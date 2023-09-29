import { FC } from 'react';
import Image from 'next/image';
import { ContentPartPropsType } from './../../../types';
import styles from './imgChunk.module.scss';

export type IMGChunk = FC<ContentPartPropsType>;

export function IMGChunk(props: ContentPartPropsType): JSX.Element {
  return (
    <div className={styles.wrapper}>
      {props?.src && <Image src={props.src} height={400} width={1200} layout="intrinsic" alt={props?.alternativeText || ''} />}
      {props?.caption && <span>Źródło: {props?.caption}</span>}
    </div>
  );
}
