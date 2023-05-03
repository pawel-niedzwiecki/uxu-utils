import Image from 'next/legacy/image';
import { Avatar, Box, DummyIMG, Link, LoadingLine } from '../../../atoms';
import { Ads } from '../../../organisms';
import { ParseContentPartToChunk } from './../../../molecules';
import { Article, BoxAds, BoxAuthor, BoxAuthorData, BoxContent, BoxImg, Header, Tag, Tags } from './components.article.full.styles';
import ReactMarkdown from 'react-markdown';
import { Props } from './components.article.full.types';
import { parserDayToName, parserMonthToName } from '../../../../utils';

export const ArticleFull: Props = ({ data, isLoading }) => {
  const isLoadingImg = (
    <BoxImg>
      {isLoading ? (
        <LoadingLine height={{ x: '18rem', s: '30rem' }} />
      ) : data?.cover?.src ? (
        <Image layout="fill" objectFit="cover" src={data.cover.src} alt={data.cover?.alt ? data.cover.alt : data.title} />
      ) : (
        <DummyIMG height={{ x: '18rem', s: '50rem' }} width="100%" />
      )}
    </BoxImg>
  );

  const isLoadingAuthor = (
    <BoxAuthor>
      {isLoading ? (
        <>
          <Avatar isLoading={isLoading} />
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
          <Avatar src={data?.author?.avatar?.src} name={data?.author?.name} />
          <BoxAuthorData>
            <span>{data?.author?.name}</span>
            {data?.createdAt && <span>{`${new Date(data?.createdAt).getDate()} ${parserMonthToName(data?.createdAt)} ( ${parserDayToName(data?.createdAt)} )`}</span>}
          </BoxAuthorData>
        </>
      )}
    </BoxAuthor>
  );

  const isLoadingHeader = <Header>{isLoading ? <LoadingLine height="4.2rem" /> : <>{data?.title}</>}</Header>;

  const isLoadingTags = (
    <Tags>
      {isLoading
        ? new Array(5).fill(
            <Tag>
              <LoadingLine height="2rem" width="3.5rem" style={{ marginRight: '1rem' }} />
            </Tag>,
          )
        : data?.tags?.map(tag => (
            <Tag>
              {tag?.slug && tag?.title && (
                <Link href={tag.slug} title={tag.title}>
                  {tag.title}
                </Link>
              )}
            </Tag>
          ))}
    </Tags>
  );

  return (
    <Article>
      <BoxContent>
        {isLoadingHeader}
        <p className="lead">{data?.lead}</p>
        <ParseContentPartToChunk
          contentParts={[
            {
              id: 'dwdw',
              type: 0,
              value: 'okoko',
            },
            {
              id: 'dwd3w',
              type: 0,
              value: 'okoko',
            },
            {
              id: 'dw32dw',
              type: 0,
              value: 'okoko',
            },
          ]}
        >
          {({ chunkComponents }) => {
            console.log(chunkComponents);
            return <p>ok</p>;
          }}
        </ParseContentPartToChunk>
        {isLoadingAuthor}
      </BoxContent>
      <BoxAds>
        <Ads slot="s250250" />
      </BoxAds>
      {isLoadingImg}
      <BoxContent>
        {isLoadingTags}
        {data?.contentparts?.map(item => {
          if (item.type === 'txt') return item?.content && <ReactMarkdown>{item.content}</ReactMarkdown>;
          else if (item.type === 'quote') return <q>{item.content}</q>;
          else if (item.type === 'img') {
            return item?.src ? (
              <div className="img">
                <Image layout="fill" objectFit="cover" src={item.src} alt={item?.alt ? item.alt : ''} />
              </div>
            ) : (
              <>ok</>
            );
          }
          return <></>;
        })}
      </BoxContent>
      <BoxAds>
        <Box position="sticky" style={{ top: '35px', display: 'block' }}>
          <Ads slot="s250600" />
        </Box>
      </BoxAds>
    </Article>
  );
};
