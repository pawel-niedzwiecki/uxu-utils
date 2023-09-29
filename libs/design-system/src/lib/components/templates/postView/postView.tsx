import styles from './postView.module.scss';
import { Ads } from '../../organisms';
import { ParseContentPartToChunk, ButtonsSocialShare } from '../../molecules';
import { TagList } from '../../atoms';
import { useSiteConfig } from '../../../hooks';
import classnames from 'classnames';
import {
  transformChunkToComponent
} from '../../molecules/chunks/components/parsers/parseChunkToComponent/parseChunkToComponent';
import { PostViewProps } from './types';
import { ArticleMetaWrapper, Cover } from "./components";



export const PostView = ( {postViewData}: PostViewProps ) => {
  const { site } = useSiteConfig ();

  const {cover, authors, createdAt, title, lead, tags, contentparts, id} = postViewData || {};

  return (
    <article className={classnames( styles.article, 'article' )}>
      <div className={styles.adWithContentWrapper}>
        <div className={styles.content}>
          {title && <h1 className={styles.header}>{title}</h1>}
          {lead && <p className={styles.lead}>{lead}</p>}
          <ArticleMetaWrapper authors={authors} createdAt={createdAt}/>
        </div>
        <div className={classnames(styles.wrapperAds, styles.adsInPost)}>
          <Ads slot="s250250" stickyOffset="9rem" />
        </div>
      </div>
      <Cover cover={cover} title={title}/>
      <div className={styles.adWithContentWrapper}>
        <div className={styles.content}>
          <TagList tags={tags || []}/>
          {contentparts && (
            <ParseContentPartToChunk contentParts={contentparts}>
              {( {chunkComponents} ) => chunkComponents.map (transformChunkToComponent)}
            </ParseContentPartToChunk>
          )}
        </div>
        {
          <div className={classnames(styles.wrapperAds, styles.adsInPost)}>
            <Ads slot="s250600"  stickyOffset="9rem" />
          </div>
        }
        <div className={styles.content}>
          <ButtonsSocialShare canonicalURL={site?.canonicalUrl}/>
        </div>
      </div>
    </article>
  );
};
