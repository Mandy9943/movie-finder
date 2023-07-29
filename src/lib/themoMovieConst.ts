export const movieApiconfigurations = {
  images: {
    base_url: "http://image.tmdb.org/t/p/",
    backdrop_sizes: {
      w300: "w300",
      w780: "w780",
      w1280: "w1280",
      original: "original",
    },
    poster_sizes: {
      w92: "w92",
      w154: "w154",
      w185: "w185",
      w342: "w342",
      w500: "w500",
      w780: "w780",
      original: "original",
    },
  },
  genres: [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ],
};

export const backdropBaseUrl =
  movieApiconfigurations.images.base_url +
  movieApiconfigurations.images.backdrop_sizes.w780;
export const posterBaseUrl =
  movieApiconfigurations.images.base_url +
  movieApiconfigurations.images.poster_sizes.w500;
