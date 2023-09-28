import classnames from 'classnames';
import { Link } from '../../../../../atoms';
import { BookOpen, FileText } from 'react-feather';
import styles from './suggestionList.module.scss';
import type { SuggestionListProps } from "./types";

export function SuggestionList ( {suggestions, listType, onMouseEnter, currentHoveredSuggestionIndex}: SuggestionListProps ) {
  return (
    <>
      <ul className={classnames ( styles.suggestionList, 'searchResultList' )}>
        {suggestions.map ( ( {title, slug, type, lead}, index ) => (
          <li key={index} onMouseEnter={() => onMouseEnter ( index )}>
            <Link href={`/${slug}`} title={title}>
              {type === 'post' ? <BookOpen/> : <FileText/>}
              <div className={styles.content}>
                <p className={styles.title}>{title}</p>
                {listType === 'searchResults' && lead && <span className={styles.lead}>{lead}</span>}
              </div>
            </Link>
          </li>
        ) )}
      </ul>
      <style jsx>
        {`
          .searchResultList {
            &::after {
              top: ${currentHoveredSuggestionIndex * 6}rem;
            }
          }
        `}
      </style>
    </>
  )
}
