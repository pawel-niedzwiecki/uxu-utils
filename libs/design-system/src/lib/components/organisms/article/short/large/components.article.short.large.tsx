import Image from 'next/legacy/image';
import { Avatar, DummyIMG, Link, LoadingLine } from '../../../../atoms';
import {
  Article,
  BoxAuthor,
  BoxAuthorData,
  BoxContent,
  BoxImg,
  Footer,
  Header,
  Stat,
  StatList,
  Tag,
  Tags,
} from './components.article.short.large.style';
import { Props } from './components.article.short.large.types';
import { functionSelectIcon, parserDayToName, parserMonthToName } from './../../../../../utils';

export const ArticleShortLarge: Props = ({ data: { isLoading, content } }) => {
  const { slug, createdAt, cover, title, author, tags, stats } = content;
  const statIcons = ['smile', 'messagesquare', 'eye'];

  const isLoadingImg = (
    <BoxImg>
      {isLoading ? (
        <LoadingLine height={{ x: '18rem', s: '30rem' }} />
      ) : (
        <Link title={title} href={slug}>
          {cover?.src ? (
            <Image
              layout='fill'
              objectFit='cover'
              src={cover.src}
              alt={cover?.alt ? cover.alt : ''}
            />
          ) : (
            <DummyIMG height={{ x: '18rem', s: '30rem' }} width='100%' />
          )}
        </Link>
      )}
    </BoxImg>
  );


  const isLoadingAuthor = (
    <BoxAuthor>
      {isLoading ? (
        <>
          <Avatar isLoading={isLoading} />
          <BoxAuthorData>
            {...new Array(2).fill(<span><LoadingLine /></span>)}
          </BoxAuthorData>
        </>
      ) : (
        <>
          <Avatar src={author?.avatar?.src} name={author?.name} />
          <BoxAuthorData>
            <span>{author?.name}</span>
            <span>{`${new Date(createdAt).getDate()} ${parserMonthToName(createdAt)} ( ${parserDayToName(createdAt)} )`}</span>
          </BoxAuthorData>
        </>
      )}
    </BoxAuthor>
  );

  const isLoadingHeader = (
    <Header>
      {isLoading ? (
        <LoadingLine height='4.2rem' />
      ) : (
        <Link href={slug} title={title}>{title}</Link>
      )}
    </Header>
  );

  const isLoadingTags = (
    <Tags>
      {isLoading ? (
        new Array(5).fill(<Tag><LoadingLine height='2rem' width='3.5rem' style={{ marginRight: '1rem' }} /></Tag>)
      ) : (
        tags?.map((tag) => <Tag><Link href={tag.slug} title={tag.title}>{tag.title}</Link></Tag>)
      )}
    </Tags>
  );

  const isLoadingFooter = (
    <Footer>
      {isLoading ? (
        <>
          <StatList>
            {new Array(3).fill(undefined).map((_, index) =>
              <Stat>
                {functionSelectIcon(statIcons[index], 20)}
                <span><LoadingLine height='1.6rem' width='2rem' /></span>
              </Stat>,
            )}
          </StatList>
          <LoadingLine height='2.8rem' width='9rem' className='link' />
        </>
      ) : (
        <>
          <StatList>
            {stats && Object.entries(stats).map((stat, index) => (
                <Stat>
                  {functionSelectIcon(statIcons[index], 20)}
                  <span>{stat[1]}</span>
                </Stat>
              ),
            )}
          </StatList>
          <Link
            title='Więcej'
            type='button'
            color='primarry'
            variant='primary'
            className='link'
            href={slug}>Więcej</Link>
        </>
      )}
    </Footer>
  );


  return (
    <Article>
      {isLoadingImg}
      <BoxContent>
        {isLoadingAuthor}
        {isLoadingHeader}
        {isLoadingTags}
        {isLoadingFooter}
      </BoxContent>
    </Article>
  );
};
