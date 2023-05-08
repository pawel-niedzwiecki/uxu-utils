import Image from 'next/legacy/image';
import { Avatar, DummyIMG, Link, LoadingLine } from '../../../../atoms';
import { Article, BoxAuthor, BoxAuthorData, BoxContent, BoxImg } from './components.article.short.small.style';
import { Props } from './../components.article.short.types';
import { parserDayToName, parserMonthToName } from '../../../../../utils';

export const ArticleShortSmall: Props = ({
  data: {
    content: { createdAt = new Date(), cover, author, title = '', slug = '/' },
  },
  isLoading,
}) => {
  const isLoadingImg = (
    <BoxImg>
      {isLoading ? (
        <LoadingLine height="18rem" />
      ) : (
        <Link title={title} href={slug}>
          {cover?.src ? <Image layout="fill" objectFit="cover" src={cover.src} alt={cover?.alt ? cover?.alt : ''} /> : <DummyIMG height="18rem" width="100%" />}
        </Link>
      )}
    </BoxImg>
  );

  const isLoadingAuthor = (
    <BoxAuthor>
      {isLoading ? (
        <>
          <Avatar isLoading={isLoading} size="1rem" />
          <BoxAuthorData>
            {...new Array(2).fill(
              <span>
                <LoadingLine />
              </span>,
            )}
          </BoxAuthorData>
        </>
      ) : (
        <>
          <Avatar src={author?.avatar?.src} name={author?.name} size="small" />
          <BoxAuthorData>
            <span>{author?.name}</span>
            <span>{`${new Date(createdAt).getDate()} ${parserMonthToName(createdAt)} ( ${parserDayToName(createdAt)} )`}</span>
          </BoxAuthorData>
        </>
      )}
    </BoxAuthor>
  );

  const isLoadingContent = (
    <BoxContent>
      {isLoading ? (
        <>
          <LoadingLine height="2.4rem" />
          <LoadingLine height="2.4rem" />
        </>
      ) : (
        <>
          <Link title={title} href={slug}>
            {title}
          </Link>
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
