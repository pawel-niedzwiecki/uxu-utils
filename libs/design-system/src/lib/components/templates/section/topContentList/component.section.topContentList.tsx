import style from './component.section.topContentList.module.scss';
import Image from 'next/image';
import { Container, Row, Col, Link } from './../../../atoms';
import { ArticleShortSmall } from './../../../organisms';
import { Collapse } from './../../../molecules';
import { ContentPartPropsType, ParseContentPartToChunk } from './../../../molecules/chunks';
import {
  transformChunkToComponent
} from "../../../molecules/chunks/components/parsers/parseChunkToComponent/parseChunkToComponent";
import { useState } from "react";


type Props = Array<{
  id: string;
  title: string;
  slug?: string;
  lead: string;
  createdAt?: Date;
  author?: {
    name?: string;
    avatar?: {
      src?: string;
      alt?: string;
    }
  },
  cover?: {
    src?: string;
    alt?: string;
  },
  contentparts?: ContentPartPropsType[];
}>

export function SectionTopContentList () {

  const data: Props = [
    {
      id: "383",
      lead: "Groźny wypadek w Łodzi: Chevrolet koziołkował, Groźny wypadek w Łodzi: Chevrolet koziołkował Groźny wypadek w Łodzi: Chevrolet koziołkowałGroźny wypadek w Łodzi: Chevrolet koziołkował",
      title: "Groźny wypadek w Łodzi: Chevrolet koziołkował",
      slug: "/a/383/grozny-wypadek-w-lodzi-chevrolet-koziolkowal",
      createdAt: new Date ( "2023-06-08T16:17:48.529Z" ),
      author: {
        name: "Paweł Karoń",
        avatar: {
          src: "https://wtrasiepl.s3.eu-west-1.amazonaws.com/thumbnail_211474851_208189834546212_1629416492488593311_n_1_55219a512a.jpg",
          alt: "Paweł Karoń"
        }
      },
      cover: {
        src: "https://wtrasiepl.s3.eu-west-1.amazonaws.com/small_i_Stock_1369967120_7b75410494.jpg",
        alt: "wypadek wieczorem"
      },
      contentparts: [
        {
          id: "273",
          type: 0,
          value: "A2 zaczyna się na granicy z Niemcami, gdzie łączy się z niemiecką autostradą A12. Przebiega przez województwo lubuskie, z węzłami w Świecku, Rzepinie i Świebodzinie. Następnie przechodzi przez województwo wielkopolskie, z węzłami w Nowym Tomyślu, Poznaniu, Wrześni oraz Koninie. W dalszej części trasa prowadzi przez województwo łódzkie, z węzłami w Strykowie, Łodzi oraz Skierniewicach, aż do województwa mazowieckiego, gdzie kończy się na obwodnicy Warszawy."
        },
        {
          id: "273",
          type: 0,
          value: "A2 zaczyna się na granicy z Niemcami, gdzie łączy się z niemiecką autostradą A12. Przebiega przez województwo lubuskie, z węzłami w Świecku, Rzepinie i Świebodzinie. Następnie przechodzi przez województwo wielkopolskie, z węzłami w Nowym Tomyślu, Poznaniu, Wrześni oraz Koninie. W dalszej części trasa prowadzi przez województwo łódzkie, z węzłami w Strykowie, Łodzi oraz Skierniewicach, aż do województwa mazowieckiego, gdzie kończy się na obwodnicy Warszawy."
        },
        {
          id: "273",
          type: 0,
          value: "A2 zaczyna się na granicy z Niemcami, gdzie łączy się z niemiecką autostradą A12. Przebiega przez województwo lubuskie, z węzłami w Świecku, Rzepinie i Świebodzinie. Następnie przechodzi przez województwo wielkopolskie, z węzłami w Nowym Tomyślu, Poznaniu, Wrześni oraz Koninie. W dalszej części trasa prowadzi przez województwo łódzkie, z węzłami w Strykowie, Łodzi oraz Skierniewicach, aż do województwa mazowieckiego, gdzie kończy się na obwodnicy Warszawy."
        },
        {
          id: "273",
          type: 0,
          value: "A2 zaczyna się na granicy z Niemcami, gdzie łączy się z niemiecką autostradą A12. Przebiega przez województwo lubuskie, z węzłami w Świecku, Rzepinie i Świebodzinie. Następnie przechodzi przez województwo wielkopolskie, z węzłami w Nowym Tomyślu, Poznaniu, Wrześni oraz Koninie. W dalszej części trasa prowadzi przez województwo łódzkie, z węzłami w Strykowie, Łodzi oraz Skierniewicach, aż do województwa mazowieckiego, gdzie kończy się na obwodnicy Warszawy."
        },
      ]
    },
    {
      id: "367",
      lead: "Groźny wypadek w Łodzi: Chevrolet koziołkował, Groźny wypadek w Łodzi: Chevrolet koziołkował Groźny wypadek w Łodzi: Chevrolet koziołkowałGroźny wypadek w Łodzi: Chevrolet koziołkował",
      title: "Groźne zderzenie trzech samochodów w miejscowości Solca Mała: są ranni, a wśród nich 9-miesięczne dziecko",
      slug: "/a/367/grozne-zderzenie-trzech-samochodow-w-miejscowosci-solca-mala-sa-ranni-a-wsrod-nich-9-miesieczne-dziecko",
      createdAt: new Date ( "2023-06-08T16:17:48.529Z" ),
      author: {
        name: "Paweł Karoń",
        avatar: {
          src: "https://wtrasiepl.s3.eu-west-1.amazonaws.com/thumbnail_211474851_208189834546212_1629416492488593311_n_1_55219a512a.jpg",
          alt: "Paweł Karoń"
        }
      },
      cover: {
        src: "https://wtrasiepl.s3.eu-west-1.amazonaws.com/small_i_Stock_1153296424_fd2c169832.jpg",
        alt: "lotnicze pogotowie ratunkowe"
      },
    },
    {
      id: "366",
      lead: "Groźny wypadek w Łodzi: Chevrolet koziołkował, Groźny wypadek w Łodzi: Chevrolet koziołkował Groźny wypadek w Łodzi: Chevrolet koziołkowałGroźny wypadek w Łodzi: Chevrolet koziołkował",
      title: "Dramatyczne sceny podczas prac polowych: ciągnik rolniczy przejechał 60-latka",
      slug: "/a/366/dramatyczne-sceny-podczas-prac-polowych-ciagnik-rolniczy-przejechal-60-latka",
      createdAt: new Date ( "2023-06-08T16:17:48.529Z" ),
      author: {
        name: "Paweł Karoń",
        avatar: {
          src: "https://wtrasiepl.s3.eu-west-1.amazonaws.com/thumbnail_211474851_208189834546212_1629416492488593311_n_1_55219a512a.jpg",
          alt: "Paweł Karoń"
        }
      },
      cover: {
        src: "https://wtrasiepl.s3.eu-west-1.amazonaws.com/small_i_Stock_1337995559_f92552dc5d.jpg",
        alt: "ciągnik"
      },
    },
    {
      id: "362",
      lead: "Groźny wypadek w Łodzi: Chevrolet koziołkował, Groźny wypadek w Łodzi: Chevrolet koziołkował Groźny wypadek w Łodzi: Chevrolet koziołkowałGroźny wypadek w Łodzi: Chevrolet koziołkował",
      title: "Tragiczny wypadek na S-8: kierowca Volvo nie żyje",
      slug: "/a/362/tragiczny-wypadek-na-s-8-kierowca-volvo-nie-zyje",
      createdAt: new Date ( "2023-06-08T16:17:48.529Z" ),
      author: {
        name: "Paweł Karoń",
        avatar: {
          src: "https://wtrasiepl.s3.eu-west-1.amazonaws.com/thumbnail_211474851_208189834546212_1629416492488593311_n_1_55219a512a.jpg",
          alt: "Paweł Karoń"
        }
      },
      cover: {
        src: "https://wtrasiepl.s3.eu-west-1.amazonaws.com/i_Stock_872089084_40317648d6.jpg",
        alt: "tir"
      },
    },
    {
      id: "339",
      lead: "Groźny wypadek w Łodzi: Chevrolet koziołkował, Groźny wypadek w Łodzi: Chevrolet koziołkował Groźny wypadek w Łodzi: Chevrolet koziołkowałGroźny wypadek w Łodzi: Chevrolet koziołkował",
      title: "Niespodziewane zderzenie w Łodzi: Jedna osoba w szpitalu",
      slug: "/a/339/niespodziewane-zderzenie-w-lodzi-jedna-osoba-w-szpitalu",
      createdAt: new Date ( "2023-06-08T16:17:48.529Z" ),
      author: {
        name: "Paweł Karoń",
        avatar: {
          src: "https://wtrasiepl.s3.eu-west-1.amazonaws.com/thumbnail_211474851_208189834546212_1629416492488593311_n_1_55219a512a.jpg",
          alt: "Paweł Karoń"
        }
      },
      cover: {
        src: "https://wtrasiepl.s3.eu-west-1.amazonaws.com/i_Stock_872089084_40317648d6.jpg",
        alt: "rozbite auto po wypadku samochodowym"
      },
    },
  ]


  const mian = data[ 0 ]
  const list = data.splice ( 1 )
  const [isOpen, setIsOpen] = useState ( false )
  const buttonForSLug = mian?.slug ? (
    <Link
      href={mian.slug}
      title={mian?.title}
      type="button"
      color="primarry"
      style={{maxWidth: "max-content", marginTop: "1.5rem"}}>Wiecej</Link>
  ) : null

  return (
    <section className={style.wrapper}>
      {mian?.cover?.src && (
        <div className={style.wrapperImage}>
          <Image
            src={mian.cover.src}
            layout='fill'
            objectFit='cover'
            alt={mian?.cover?.alt || "wTrasie"}/>
        </div>
      )}
      <Container style={{zIndex: "2"}}>
        <Row>
          <Col xs={12} style={{paddingBottom: "3rem"}}>
            <h1>{mian?.title}</h1>
            <p>{mian?.lead}</p>
            {mian.contentparts?.length ? (
              <Collapse
                isOpen={isOpen}
                onClick={() => {
                  setIsOpen ( !isOpen )
                }}
                label={{title: isOpen ? "Zwiń opis" : "Zobacz cały opis", bold: true}}
                className={style.boxContent}
              >
                <ParseContentPartToChunk
                  contentParts={mian.contentparts}>{( {chunkComponents} ) => chunkComponents.map ( transformChunkToComponent )}</ParseContentPartToChunk>
              </Collapse>

            ) : buttonForSLug}
          </Col>
        </Row>
        <div className={style.boxSlider}>
          {list.map ( ( item, index ) => (
            <ArticleShortSmall
              key={index}
              data={{
                content: {
                  id: item?.id,
                  title: item?.title,
                  createdAt: item?.createdAt,
                  cover: item?.cover,
                  author: item.author,
                  slug: item.slug
                }
              }}
              isLoading={false}/>
          ) )}
        </div>
      </Container>
    </section>
  )
}
