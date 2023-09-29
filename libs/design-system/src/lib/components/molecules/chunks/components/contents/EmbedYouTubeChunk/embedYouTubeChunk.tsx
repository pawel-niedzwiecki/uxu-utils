import { FC } from 'react';
import styles from './embedYouTubeChunk.module.scss';
import { ContentPartPropsType } from './../../../types';
import { useBreakpoints } from '../../../../../../hooks';
import { extractHashFromYoutubeUrl } from './../../../../../../utils';

export type EmbedYouTubeChunk = FC<ContentPartPropsType>;

export function EmbedYouTubeChunk(props: ContentPartPropsType): JSX.Element {
  const { isMobile } = useBreakpoints();
  const hash = props?.url ? extractHashFromYoutubeUrl(props.url) : null;
  if (!hash) return <></>;
  return (
    <div className={styles.wrapper}>
      <iframe
        width={isMobile ? '230px' : '680px'}
        height={isMobile ? '150px' : '400px'}
        src={`https://www.youtube.com/embed/${hash}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
