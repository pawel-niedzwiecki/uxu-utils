export type CoverProps = {
  isLoading: boolean
  img: { url: string, alt: string } | null
} | null

export type FilterProps = {
  isLoading: boolean
  links: { slug: string, title: string, score: number, active: boolean }[] | null
} | null

export type SocialMediaProps = { isLoading: boolean, list: { url: string, typ: string }[] } | null


export type Props = {
  cover?: CoverProps
  filter?: FilterProps
  socialMedia?: SocialMediaProps

  alert?: boolean
}


