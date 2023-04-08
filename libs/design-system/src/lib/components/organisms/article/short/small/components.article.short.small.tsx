import Image from 'next/legacy/image';
import { DummyIMG, Link, LoadingLine } from '../../../../atoms';
import { Article, BoxContent, BoxImg } from './components.article.short.small.style';
import { Props } from './../components.article.short.types';

export const ArticleShortSmall: Props = ({ data: { content }, isLoading }) => {


  const isLoadingImg = (
    <BoxImg>
      {isLoading ? (
        <LoadingLine height='18rem' />
      ) : (
        <Link title={content.title} href={content.slug}>
          {content.cover?.src ? (
            <Image
              layout='fill'
              objectFit='cover'
              src={content.cover.src}
              alt={content.cover?.alt ? content.cover?.alt : ''}
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
        <Link title={content.title} href={content.slug}>{content.title}</Link>
      )}
    </BoxContent>
  );

  return (
    <Article>
      {isLoadingImg}
      {isLoadingContent}
    </Article>);
};
