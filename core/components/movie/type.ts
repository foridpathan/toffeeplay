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

export type MovieProps = {
  _id: string;
  id: string;
  primaryImage: Image;
  titleType: TitleType;
  titleText: TitleText;
  originalTitleText: TitleText;
  releaseYear: YearRange;
  releaseDate: Date | null;
};
