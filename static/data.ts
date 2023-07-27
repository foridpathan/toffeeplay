import { MovieProps } from "@/core/components/movie/type";

export const movieData: MovieProps = {
  _id: "61e58c9bd8f3c0931e43efb3",
  id: "tt10241858",
  ratingsSummary: {
    aggregateRating: 8.3,
    voteCount: 53,
    __typename: "RatingsSummary",
  },
  episodes: {
    episodes: {
      total: 8,
      __typename: "EpisodeConnection",
    },
    seasons: [
      {
        number: 1,
        __typename: "EpisodesSeason",
      },
    ],
    years: [
      {
        year: 2023,
        __typename: "EpisodesYear",
      },
    ],
    totalEpisodes: {
      total: 8,
      __typename: "EpisodeConnection",
    },
    unknownSeasonEpisodes: {
      total: 0,
      __typename: "EpisodeConnection",
    },
    topRated: {
      edges: [
        {
          node: {
            ratingsSummary: {
              aggregateRating: null,
              __typename: "RatingsSummary",
            },
            __typename: "Title",
          },
          __typename: "EpisodeEdge",
        },
      ],
      __typename: "EpisodeConnection",
    },
    __typename: "Episodes",
  },
  primaryImage: {
    id: "rm1265575169",
    width: 450,
    height: 630,
    url: "https://m.media-amazon.com/images/M/MV5BZDdjNWNmMmYtMGYxYi00OTQ2LWE0MDMtYmJhZDE1YTMzYjk4XkEyXkFqcGdeQXVyMTMzNzIyNDc1._V1_.jpg",
    caption: {
      plainText: "Supa Team 4 (2023)",
      __typename: "Markdown",
    },
    __typename: "Image",
  },
  titleType: {
    text: "TV Series",
    id: "tvSeries",
    isSeries: true,
    isEpisode: false,

    __typename: "TitleType",
  },
  genres: {
    genres: [
      {
        text: "Animation",
        id: "Animation",
        __typename: "Genre",
      },
      {
        text: "Action",
        id: "Action",
        __typename: "Genre",
      },
      {
        text: "Adventure",
        id: "Adventure",
        __typename: "Genre",
      },
      {
        text: "Comedy",
        id: "Comedy",
        __typename: "Genre",
      },
      {
        text: "Family",
        id: "Family",
        __typename: "Genre",
      },
      {
        text: "Fantasy",
        id: "Fantasy",
        __typename: "Genre",
      },
      {
        text: "Sci-Fi",
        id: "Sci-Fi",
        __typename: "Genre",
      },
    ],
    __typename: "Genres",
  },
  titleText: {
    text: "Supa Team 4",
    __typename: "TitleText",
  },
  originalTitleText: {
    text: "Supa Team 4",
    __typename: "TitleText",
  },
  releaseYear: {
    year: 2023,
    endYear: null,
    __typename: "YearRange",
  },
  releaseDate: {
    day: 20,
    month: 7,
    year: 2023,
    __typename: "ReleaseDate",
  },
  runtime: {
    seconds: 1620,
    __typename: "Runtime",
  },
  series: null,
  meterRanking: {
    currentRank: 4602,
    rankChange: {
      changeDirection: "UP",
      difference: 11924,
      __typename: "MeterRankChange",
    },
    __typename: "TitleMeterRanking",
  },
  plot: {
    plotText: {
      plainText:
        "It follows four teenage girls living in a futuristic version of Lusaka, Zambia, who are recruited by a retired secret agent to save the world.",
      __typename: "Markdown",
    },
    language: {
      id: "en-US",
      __typename: "DisplayableLanguage",
    },
    __typename: "Plot",
  },
};
