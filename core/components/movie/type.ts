type Caption = {
  plainText: string;
  __typename: string;
};

type Image = {
  id: string;
  width: number;
  height: number;
  url: string;
  caption: Caption;
  __typename: string;
};

type TitleType = {
  text: string;
  id: string;
  isSeries: boolean;
  isEpisode: boolean;
  __typename: string;
};

type TitleText = {
  text: string;
  __typename: string;
};

type YearRange = {
  year: number;
  endYear: number | null;
  __typename: string;
};

type RatingsSummary = {
  aggregateRating: number;
  voteCount: number;
  __typename: string;
};

type Genre = {
  text: string;
  id: string;
  __typename: string;
};

type Genres = {
  genres: Genre[];
  __typename: string;
};

type ReleaseDate = {
  day: number;
  month: number;
  year: number;
  __typename: string;
};

type Runtime = {
  seconds: number;
  __typename: string;
};

type DisplayableLanguage = {
  id: string;
  __typename: string;
};

type Markdown = {
  plainText: string;
  __typename: string;
};

type Plot = {
  plotText: Markdown;
  language: DisplayableLanguage;
  __typename: string;
};

export type MovieProps = {
  _id: string;
  id: string;
  ratingsSummary: RatingsSummary;
  episodes: any | null;
  primaryImage: Image;
  titleType: TitleType;
  genres: Genres;
  titleText: TitleText;
  originalTitleText: TitleText;
  releaseYear: YearRange;
  releaseDate: ReleaseDate;
  runtime: Runtime;
  series: any | null;
  meterRanking: any | null;
  plot: Plot;
};
