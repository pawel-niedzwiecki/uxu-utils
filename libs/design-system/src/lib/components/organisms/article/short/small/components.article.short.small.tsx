import Image from 'next/legacy/image';
import { Avatar, DummyIMG, Link, LoadingLine } from '../../../../atoms';
import { Article, BoxAuthor, BoxAuthorData, BoxContent, BoxImg } from './components.article.short.small.style';
import { Props } from './../components.article.short.types';
import { parserDayToName, parserMonthToName } from '../../../../../utils';

export const ArticleShortSmall: Props = ( {data, isLoading} ) => {
  const content = data?.content;
  const createdAt = content?.createdAt || new Date();


  const isLoadingImg = (
    <BoxImg>
      {isLoading ? (
        <LoadingLine height="18rem"/>
      ) : content?.slug && content?.title && (
        <Link title={content.title} href={content.slug}>
          {content?.cover?.src ? <Image layout="fill" objectFit="cover" src={content?.cover.src}
                                        alt={content?.cover?.alt ? content?.cover?.alt : ''}/> :
            <DummyIMG height="18rem" width="100%"/>}
        </Link>
      )}
    </BoxImg>
  );

  const isLoadingAuthor = (
    <BoxAuthor>
      {isLoading ? (
        <>
          <Avatar isLoading={isLoading} size="1rem"/>
          <BoxAuthorData>
            {...new Array ( 2 ).fill (
              <span>
                <LoadingLine/>
              </span>,
            )}
          </BoxAuthorData>
        </>
      ) : (
        <>
          <Avatar src={content?.author?.avatar?.src} name={content?.author?.name} size="small"/>
          <BoxAuthorData>
            <span>{content?.author?.name}</span>
            <span>{`${new Date ( createdAt ).getDate ()} ${parserMonthToName ( createdAt )} ( ${parserDayToName ( createdAt )} )`}</span>
          </BoxAuthorData>
        </>
      )}
    </BoxAuthor>
  );

  const isLoadingContent = (
    <BoxContent>
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
    </BoxContent>
  );

  return (
    <Article className="article">
      {isLoadingImg}
      {isLoadingContent}
    </Article>
  );
};
