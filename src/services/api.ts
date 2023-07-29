import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import queryString from "query-string";
import { IExtendedMovie, IMoviesReponse } from "types/movie.interface";

const token = process.env.NEXT_PUBLIC_THEMOMOVIE_API_TOKEN;

// Define a service using a base URL and expected endpoints
export const themoMovieApi = createApi({
  reducerPath: "themomovieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    prepareHeaders: (headers, {}) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPopularsMovies: builder.query<IMoviesReponse, void | { page?: number }>({
      query: (queryOptions) =>
        queryString.stringifyUrl({
          url: `/movie/popular`,
          query: queryOptions || undefined,
        }),
    }),
    getMovie: builder.query<IExtendedMovie, string>({
      query: (movieId) => `/movie/${movieId}`,
    }),
  }),
});

export const { useGetPopularsMoviesQuery, useGetMovieQuery } = themoMovieApi;
