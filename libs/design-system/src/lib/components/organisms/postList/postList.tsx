import styles from './postList.module.scss'
import Img from "next/image";
import { TagList, Link } from "../../atoms";
import { AvatarGroup } from "../../molecules";
import { PostListProps } from "./types";
import { Image } from "react-feather";

export function PostList({ slug, title, cover, authors = [] }: PostListProps) {
  return (
    <div className={styles.wrapper}>
      <Link href={slug} title="koko">
        <article className={styles.article}>
          <div className={styles.img}>
            {cover?.src  ? (
              <Img
                fill
                src={cover.src}
                alt={cover?.alt || title}
              />
            ) : (
              <Image size={50} />
            )}
          </div>
          <div className={styles.content}>
            <h2 className={styles.header}>{title}</h2>
            <AvatarGroup
              size="default"
              members={authors}
              className={styles.autors}
            />
          </div>
        </article>
      </Link>
    </div>
  );
}
