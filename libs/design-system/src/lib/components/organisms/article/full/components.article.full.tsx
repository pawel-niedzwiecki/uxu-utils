import Image from 'next/legacy/image';
import { Avatar, DummyIMG, Link, LoadingLine } from '../../../atoms';
import {
  Article,
  BoxAuthor,
  BoxAuthorData,
  BoxContent,
  BoxImg,
  BoxText,
  Header,
  Tag,
  Tags,
} from './components.article.full.style';
import ReactMarkdown from 'react-markdown';
import { Props } from './components.article.full.types';
import { parserDayToName, parserMonthToName } from '../../../../utils';

export const ArticleFull: Props = ({ data: { content }, isLoading }) => {
    const { createdAt, cover, title, author, tags, stats, lead, contentparts } = content;

    const isLoadingImg = (
      <BoxImg>
        {isLoading ? (
          <LoadingLine height={{ x: '18rem', s: '30rem' }} />
        ) : (
          cover?.src ? (
            <Image
              layout='fill'
              objectFit='cover'
              src={cover.src}
              alt={cover?.alt ? cover.alt : title}
            />
          ) : (
            <DummyIMG height={{ x: '18rem', s: '30rem' }} width='100%' />
          )
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
          <>{title}</>
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


    return (
      <Article>
        {isLoadingImg}
        <BoxContent>
          {isLoadingAuthor}
          {isLoadingHeader}
          {isLoadingTags}
          <BoxText>
            <p className='lead'>{lead}</p>
            {contentparts?.map((item) => {
              if (item.__typename === 'txt') return item?.content && <ReactMarkdown>{item.content}</ReactMarkdown>;
              else if (item.__typename === 'quote') return <q>{item.content}</q>;
              else if (item.__typename === 'img') {
                return item?.src ? (
                    <div className='img'>
                      <Image
                        layout='fill'
                        objectFit='cover'
                        src={item.src}
                        alt={item?.alt ? item.alt : ''}
                      />
                    </div>
                  ) :
                  (<>ok</>);
              }
              return <></>;
            })}
          </BoxText>

        </BoxContent>
      </Article>
    );
  }
;
