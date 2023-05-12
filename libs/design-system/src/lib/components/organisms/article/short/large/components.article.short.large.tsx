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
  Tags
} from './components.article.short.large.style';
import { Props } from './../components.article.short.types';
import { functionSelectIcon, parserDayToName, parserMonthToName } from './../../../../../utils';

export const ArticleShortLarge: Props = ( props ) => {
  const content = props?.data?.content;
  const createdAt = content?.createdAt || new Date ()
  const statIcons = ['smile', 'messagesquare', 'eye'];

  const isLoadingImg = (
    <BoxImg>
      {props?.isLoading ? (
        <LoadingLine height={{x: '18rem', s: '30rem'}}/>
      ) : content?.slug && content?.title && (
        <Link title={content.title} href={content.slug}>
          {content.cover?.src ? <Image layout="fill" objectFit="cover" src={content.cover.src}
                                       alt={content.cover?.alt ? content.cover.alt : ''}/> :
            <DummyIMG height={{x: '18rem', s: '30rem'}} width="100%"/>}
        </Link>
      )}
    </BoxImg>
  );

  const isLoadingAuthor = (
    <BoxAuthor>
      {props.isLoading ? (
        <>
          <Avatar isLoading={props.isLoading}/>
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
          <Avatar src={content?.author?.avatar?.src} name={content?.author?.name}/>
          <BoxAuthorData>
            <span>{content?.author?.name}</span>
            <span>{`${new Date ( createdAt ).getDate ()} ${parserMonthToName ( createdAt )} ( ${parserDayToName ( createdAt )} )`}</span>
          </BoxAuthorData>
        </>
      )}
    </BoxAuthor>
  );

  const isLoadingHeader = (
    <Header>
      {props.isLoading ? (
        <LoadingLine height="4.2rem"/>
      ) : content?.title && content.slug && (
        <Link href={content.slug} title={content.title}>
          {content.title}
        </Link>
      )}
    </Header>
  );

  const isLoadingTags = (
    <Tags>
      {props.isLoading
        ? new Array ( 5 ).fill (
          <Tag>
            <LoadingLine height="2rem" width="3.5rem" style={{marginRight: '1rem'}}/>
          </Tag>,
        )
        : content?.tags?.map ( tag => (
          <Tag>
            {tag?.slug && tag?.title && (
              <Link href={tag.slug} title={tag.title}>
                {tag.title}
              </Link>
            )}
          </Tag>
        ) )}
    </Tags>
  );

  const isLoadingFooter = (
    <Footer>
      {props.isLoading ? (
        <>
          <StatList>
            {new Array ( 3 ).fill ( undefined ).map ( ( _, index ) => (
              <Stat>
                {functionSelectIcon ( statIcons[ index ], 20 )}
                <span>
                  <LoadingLine height="1.6rem" width="2rem"/>
                </span>
              </Stat>
            ) )}
          </StatList>
          <LoadingLine height="2.8rem" width="9rem" className="link"/>
        </>
      ) : (
        <>
          <StatList>
            {content?.stats &&
              Object.entries ( content.stats ).map ( ( stat, index ) => (
                <Stat>
                  {functionSelectIcon ( statIcons[ index ], 20 )}
                  <span>{stat[ 1 ]}</span>
                </Stat>
              ) )}
          </StatList>
        </>
      )}
    </Footer>
  );

  return (
    <Article className="article">
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
