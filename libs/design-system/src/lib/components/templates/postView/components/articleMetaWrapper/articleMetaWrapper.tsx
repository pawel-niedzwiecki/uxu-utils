import { ArticleMetaWrapperProps } from "./types";
import styles from "./articleMetaWrapper.module.scss";
import { AvatarGroup } from "../../../../molecules";
import { parseFormatDate } from "../../../../../utils";

export function ArticleMetaWrapper ( {authors, createdAt}: ArticleMetaWrapperProps ) {
  return (
    <div className={styles.wrapperArticleMeta}>
      <AvatarGroup members={authors || []} size="default"/>
      <div className={styles.wrapperMeta}>
        <div className={styles.authors}>{authors?.map ( ( author, index ) => {
          return index > 0 ? (<span>, {author.title}</span>) : (<span>{author.title}</span>)
        } )}</div>
        <div className={styles.wrapperPublicationDate}>{createdAt && <span>{parseFormatDate ( createdAt )}</span>}</div>
      </div>
    </div>
  )
};
