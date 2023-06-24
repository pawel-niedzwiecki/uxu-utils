import { ArticleShortSmall } from './../../../../organisms';
import style from './../sectionLeadPostWithList.module.scss';
import type { ArticleShortDataType } from './../../../../organisms/article/short/components.article.short.types'

export function renderListContent ( list?: ArticleShortDataType[] ) {
  return (
    <div className={style.boxSlider}>
      {list?.map ( ( item, index ) => (
          <ArticleShortSmall
            key={index}
            isLoading={false}
            data={item}
          />
        )
      )}
    </div>
  );
}
