import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovie } from "types/movie.interface";

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
    getPopularsMovies: builder.query<IMovie[], void>({
      query: () => `/movie/popular`,
    }),
    getMovie: builder.query<IMovie, string>({
      query: (movieId) => `/movie/${movieId}`,
    }),
  }),
});

export const { useGetPopularsMoviesQuery } = themoMovieApi;
