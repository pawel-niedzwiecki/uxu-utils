import { WrapperHeaderShort } from './component.header.styles';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ChunkHeader } from '../../chunks';
import { Container, Row } from '../../../../../atoms';
import type { ComponentProps } from './component.header.header.short.types';

gsap.registerPlugin(ScrollTrigger);

export function HeaderShort({ isMobile, res, callBack }: ComponentProps) {
  const refHeader = useRef(null);

  useEffect(() => {
    refHeader?.current &&
      gsap.to(refHeader.current, {
        y: 45,
        duration: 5,
        scrollTrigger: {
          trigger: refHeader.current,
          start: `top ${isMobile ? '-167px' : '-120px'}`,
          end: `top ${isMobile ? '-210px' : '-163px'}`,
          scrub: true,
        },
      });
  }, [refHeader]);

  return (
    <WrapperHeaderShort ref={refHeader}>
      <Container>
        <Row>{ChunkHeader({ isMobile, scroll: true, res, callBack })}</Row>
      </Container>
    </WrapperHeaderShort>
  );
}
