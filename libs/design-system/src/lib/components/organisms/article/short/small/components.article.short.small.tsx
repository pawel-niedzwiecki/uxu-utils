import Image from 'next/legacy/image';
import { Avatar, DummyIMG, Link, LoadingLine } from '../../../../atoms';
import styles from './components.article.short.small.module.scss';
import { Props } from './../components.article.short.types';
import { parserDayToName, parserMonthToName } from '../../../../../utils';

export const ArticleShortSmall: Props = ( {data, isLoading} ) => {
  const content = data?.content;
  const createdAt = content?.createdAt || new Date();


  const isLoadingImg = (
    <div className={styles.wrapperImg}>
      {isLoading ? (
        <LoadingLine height="18rem"/>
      ) : content?.slug && content?.title && (
        <Link title={content.title} href={content.slug}>
          {content?.cover?.src ? (
            <Image
              layout="fill"
              objectFit="cover"
              src={content?.cover.src}
              alt={content?.cover?.alt ? content?.cover?.alt : ''}/>
            ) :
            <DummyIMG height="18rem" width="100%"/>}
        </Link>
      )}
    </div>
  );

  const isLoadingAuthor = (
    <div className={styles.wrapperAuthor}>
      {isLoading ? (
        <>
          <Avatar isLoading={isLoading} size="1rem"/>
          <div className={styles.wrapperAuthorData}>
            {...new Array ( 2 ).fill (
              <span>
                <LoadingLine/>
              </span>,
            )}
          </div>
        </>
      ) : (
        <>
          <Avatar src={content?.author?.avatar?.src} name={content?.author?.name} size="small"/>
          <div className={styles.wrapperAuthorData}>
            <span>{content?.author?.name}</span>
            <span>{`${new Date ( createdAt ).getDate ()} ${parserMonthToName ( createdAt )} ( ${parserDayToName ( createdAt )} )`}</span>
          </div>
        </>
      )}
    </div>
  );

  const isLoadingContent = (
    <div className={styles.wrapperContent}>
      {isLoading ? (
        <>
          <LoadingLine height="2.4rem"/>
          <LoadingLine height="2.4rem"/>
        </>
      ) : (
        <>
          {content?.slug && content?.title && (
            <Link title={content.title} href={content.slug}>
              {content.title}
            </Link>
          )}
          {isLoadingAuthor}
        </>
      )}
    </div>
  );

  return (
    <article className={styles.article}>
      {isLoadingImg}
      {isLoadingContent}
    </article>
  );
};
