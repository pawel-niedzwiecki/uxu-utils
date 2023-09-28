import { TagListProps } from "./types";
import { Link } from "./../index";
import styles from './tagList.module.scss'

export function TagList({ tags }: TagListProps){

  return (
    <ul className={styles.list}>
      {tags?.map((tag, index) => {
        return <li key={index}><Link href={tag.slug} title={tag.title}>{tag.title}</Link></li>
      })}
    </ul>
  )
}
