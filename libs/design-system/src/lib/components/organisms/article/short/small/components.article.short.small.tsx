import Image from 'next/legacy/image';
import { DummyIMG, Link, LoadingLine } from '../../../../atoms';
import { Article, BoxContent, BoxImg } from './components.article.short.small.style';
import { Props } from './components.article.short.small.types';

export const ArticleShortSmall: Props = ({ data: { isLoading, content: { title = '', slug = '/', cover } } }) => {


  const isLoadingImg = (
    <BoxImg>
      {isLoading ? (
        <LoadingLine height='18rem' />
      ) : (
        <Link title={title} href={slug}>
          {cover?.src ? (
            <Image
              layout='fill'
              objectFit='cover'
              src={cover.src}
              alt={cover?.alt ? cover?.alt : ''}
            />
          ) : (
            <DummyIMG height='18rem' width='100%' />
          )}
        </Link>
      )}
    </BoxImg>
  );


  const isLoadingContent = (
    <BoxContent>
      {isLoading ? (
        <>
          <LoadingLine height='2.4rem' />
          <LoadingLine height='2.4rem' />
        </>
      ) : (
        <Link title={title} href={slug}>{title}</Link>
      )}
    </BoxContent>
  );

  return (
    <Article>
      {isLoadingImg}
      {isLoadingContent}
    </Article>);
};
