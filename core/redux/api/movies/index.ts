import { apiSlice } from "..";

export const movieApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // GET
    getMovies: builder.query<any, string>({
      query: (param) => ({
        url: `titles/${param}`,
      }),
    }),
  }),
});
