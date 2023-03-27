import Image from 'next/legacy/image';
import { DummyIMG, Link, LoadingLine } from '../../../../atoms';
import { Article, BoxContent, BoxImg } from './components.article.short.large.style';
import { Props } from './components.article.short.large.types';

export const ArticleShortLarge: Props = ({ data: { isLoading, content } }) => {

  const title = content?.title ? content?.title : 'add title';
  const slug = content?.slug ? content?.slug : '/';

  const isLoadingImg = isLoading ? (
    <LoadingLine height='25rem' />
  ) : (
    <Link title={title} href={slug}>
      {content?.cover?.src ? (
        <Image
          src={content.cover.src}
          alt={content?.cover?.alt ? content?.cover?.alt : ''}
          layout='fill'
          objectFit='cover'
        />
      ) : (
        <DummyIMG height='25rem' width='100%' />
      )}
    </Link>
  );


  const isLoadingContent = isLoading ? (
    <LoadingLine height='2.4rem' borderRadius='default' />
  ) : (
    <Link title={title} href={slug}>{title}</Link>
  );

  return (
    <Article>
      <BoxImg>
        {isLoadingImg}
      </BoxImg>
      <BoxContent>
        {isLoadingContent}
      </BoxContent>
    </Article>);
};
