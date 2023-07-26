import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_BASE,
  prepareHeaders: async (headers, { getState, endpoint }) => {
    headers.set("X-RapidAPI-Key", process.env.NEXT_PUBLIC_ACCESS_TOKEN || "");

    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 401) {
      // api.dispatch(userLoggedOut());
      // localStorage.clear();
    }
    return result;
  },
  tagTypes: [],
  endpoints: (builder) => ({}),
});
