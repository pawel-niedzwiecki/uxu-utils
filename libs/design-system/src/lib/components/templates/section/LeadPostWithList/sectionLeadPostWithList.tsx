import style from './sectionLeadPostWithList.module.scss';
import Image from 'next/image';
import { Container, Row } from './../../../atoms';
import type { SectionLeadPostWithListProps } from './sectionLeadPostWithList.types'
import { renderMainContent, renderListContent } from './component'

export function SectionLeadPostWithList ( {main, list}: SectionLeadPostWithListProps ) {
  const { cover} = main || {};
  return (
    <section className={style.wrapper}>
      {cover?.src && (
        <div className={style.wrapperImage}>
          <Image src={cover.src} layout="fill" objectFit="cover" alt={cover?.alt || "wTrasie"}/>
        </div>
      )}
      <Container style={{zIndex: "2"}}>
        <Row>
          {main && renderMainContent ( {main} )}
        </Row>
        {renderListContent ( list )}
      </Container>
    </section>
  );
}
