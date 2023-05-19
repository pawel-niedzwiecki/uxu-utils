import { DiscussionEmbed } from "disqus-react"
import { ComponentCommentsProps } from './component.comments.types'

export function Comments( {id, pageID = "uxupl", header, canonicalURL}: ComponentCommentsProps ) {

  const disqusConfig = {
    url: canonicalURL,
    identifier: id, // Single post id
    title: header // Single post title
  }

  return (
    <DiscussionEmbed
      shortname={pageID}
      config={disqusConfig}
    />
  )
}
