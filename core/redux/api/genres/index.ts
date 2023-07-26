import { apiSlice } from "..";

export const genreApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // GET
    getGenres: builder.query<any, undefined>({
      query: () => ({
        url: `titles/utils/genres`,
      }),
    }),
  }),
});
