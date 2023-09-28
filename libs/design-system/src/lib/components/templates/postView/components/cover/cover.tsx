import Image from "next/legacy/image";
import { DummyIMG } from "../../../../atoms";
import { CoverProps } from './types';
import styles from "./cover.module.scss";

export function Cover({ cover, title }: CoverProps ) {
  return (
    <div className={styles.wrapperCoverWithMeta}>
      <div className={styles.wrapperImg}>
        {cover?.src ? (
          <Image layout="fill" objectFit="cover" src={cover.src} alt={cover?.alt || title}/>
        ) : (
          <DummyIMG width="100%" height="30rem"/>
        )}
      </div>
      {cover?.caption && <span>Źródło: {cover.caption}</span>}
    </div>
  );
}
