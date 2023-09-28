import styles from './postView.module.scss';
import { Ads } from '../../organisms';
import { ParseContentPartToChunk, ListButtonsSocialShare, Comments } from '../../molecules';
import { TagList } from '../../atoms';
import { useBreakpoints, useSiteConfig } from '../../../hooks';
import classnames from 'classnames';
import {
  transformChunkToComponent
} from '../../molecules/chunks/components/parsers/parseChunkToComponent/parseChunkToComponent';
import { PostViewProps } from './types';
import { ArticleMetaWrapper, Cover } from "./components";



export const PostView = ( {postViewData}: PostViewProps ) => {
  const {site, projectName} = useSiteConfig ();
  const {isTabletOrMobile} = useBreakpoints ();

  const {cover, authors, createdAt, title, lead, tags, contentparts, id} = postViewData || {};

  return (
    <article className={classnames( styles.article, 'article' )}>
      <div className={styles.adWithContentWrapper}>
        <div className={styles.content}>
          {title && <h1 className={styles.header}>{title}</h1>}
          {lead && <p className={styles.lead}>{lead}</p>}
          <ArticleMetaWrapper authors={authors} createdAt={createdAt}/>
        </div>
        { !isTabletOrMobile && (
          <div style={{position: 'relative', paddingBottom: "1.5rem"}}>
            <div className={styles.boxAds} style={{top: '9rem', position: 'sticky'}}>
              <Ads slot="s250250"/>
            </div>
          </div>
        )}
      </div>
      <Cover cover={cover} title={title}/>
      <div className={styles.adWithContentWrapper}>
        <div className={styles.content}>
          <TagList tags={tags || []}/>
          {contentparts && (
            <ParseContentPartToChunk contentParts={contentparts}>
              {( {chunkComponents} ) => chunkComponents.map ( transformChunkToComponent )}
            </ParseContentPartToChunk>
          )}
        </div>
        { !isTabletOrMobile && (
          <div className={styles.boxAds} style={{ top: '9rem', position: 'sticky' }}>
            <Ads slot="s250600"/>
          </div>
        )}
        <div className={styles.content}>
          <ListButtonsSocialShare canonicalURL={site?.canonicalUrl}/>
          <Comments header={title} id={id} pageID={projectName} canonicalURL={site?.canonicalUrl}/>
        </div>
      </div>
    </article>
  );
};
