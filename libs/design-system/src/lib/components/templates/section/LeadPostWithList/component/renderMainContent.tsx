import { useState } from "react";
import { Collapse, ParseContentPartToChunk } from '../../../../molecules';
import { Col, Link } from '../../../../atoms';
import style from './../sectionLeadPostWithList.module.scss';
import { transformChunkToComponent } from "../../../../molecules/chunks/components/parsers/parseChunkToComponent/parseChunkToComponent";
import type { MainContentProps } from './../sectionLeadPostWithList.types'

export function renderMainContent ({ main }: MainContentProps ) {
  const [isOpen, setIsOpen] = useState(false);

  const renderButtonForSlug = () => {
    if (!main?.slug) return null;
    return (
      <Link
        href={main?.slug}
        title={main?.title}
        type="button"
        color="primarry"
        style={{ maxWidth: "max-content", marginTop: "1.5rem" }}
      >
        Wiecej
      </Link>
    );
  };

  return (
    <Col xs={12} style={{ paddingBottom: "3rem" }}>
      <h1>{main?.title}</h1>
      <p>{main?.lead}</p>
      {main?.contentparts?.length ? (
        <Collapse
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          label={{ title: isOpen ? "Zwiń opis" : "Zobacz cały opis", bold: true }}
          className={style.boxContent}
        >
          <ParseContentPartToChunk contentParts={main?.contentparts}>
            {({ chunkComponents }) => chunkComponents.map(transformChunkToComponent)}
          </ParseContentPartToChunk>
        </Collapse>
      ) : renderButtonForSlug()}
    </Col>
  );
}
