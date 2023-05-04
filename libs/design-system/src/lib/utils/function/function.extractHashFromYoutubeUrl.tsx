import { regexYoutubeHashTagFromUrl } from './../regex/YoutubeHashTagFromUrl';

export const extractHashFromYoutubeUrl = (url: string): string | null => {
  const match = url.match(regexYoutubeHashTagFromUrl);

  if (match) {
    const hash = match[1];
    return hash;
  } else {
    return null;
  }
};
