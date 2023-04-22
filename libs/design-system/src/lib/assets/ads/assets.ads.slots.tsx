export type ParamsAd = {
  width: string;
  height: string;
  slots: { id: number; code: string }[];
};

export type Slot = 's200200' | 's250250' | 's250750' | 's200750' | 's100750' | 's250700' | 's200700' | 's100700' | 's250600' | 's200600' | 's100600' | 's750100' | 's750200' | 's750250';

export type AdsSlots = {
  s200200: ParamsAd;
  s250250: ParamsAd;
  s250750: ParamsAd;
  s200750: ParamsAd;
  s100750: ParamsAd;
  s250700: ParamsAd;
  s200700: ParamsAd;
  s100700: ParamsAd;
  s250600: ParamsAd;
  s200600: ParamsAd;
  s100600: ParamsAd;
  s750100: ParamsAd;
  s750200: ParamsAd;
  s750250: ParamsAd;
};

// @ts-ignore
export const adsSlots: AdsSlots = {
  s200200: {
    width: '200px',
    height: '200px',
    slots: [],
  },
  s250250: {
    width: '250px',
    height: '250px',
    slots: [],
  },
  s250750: {
    width: '250px',
    height: '750px',
    slots: [],
  },
  s200750: {
    width: '200px',
    height: '750px',
    slots: [],
  },
  s100750: {
    width: '100px',
    height: '750px',
    slots: [],
  },
  s250700: {
    width: '250px',
    height: '700px',
    slots: [],
  },
  s200700: {
    width: '200px',
    height: '700px',
    slots: [],
  },
  s100700: {
    width: '100px',
    height: '700px',
    slots: [],
  },
  s250600: {
    width: '250px',
    height: '600px',
    slots: [],
  },
  s200600: {
    width: '200px',
    height: '600px',
    slots: [],
  },
  s100600: {
    width: '100px',
    height: '600px',
    slots: [],
  },
  s750100: {
    width: '750px',
    height: '100px',
    slots: [],
  },
  s750200: {
    width: '750px',
    height: '200px',
    slots: [],
  },
  s750250: {
    width: '750px',
    height: '250px',
    slots: [],
  },
} as const;
