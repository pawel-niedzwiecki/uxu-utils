import { regexYoutubeHashTagFromUrlRegExp } from './../regex';

export const extractHashFromYoutubeUrl = (url: string): string | null => {
  const match = url.match(regexYoutubeHashTagFromUrlRegExp);

  if (match) {
    const hash = match[1];
    return hash;
  } else {
    return null;
  }
};
