import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Pagination,
} from "@mui/material";
import { H2, Span } from "components/Typography/Typography";
import { generatePageResultsInfo } from "lib/functions";
import React from "react";
import { useGetPopularsMoviesQuery } from "services/api";
import MovieCard from "./components/MovieCard/MovieCard";

const HomeView = () => {
  const [page, setPage] = React.useState(1);
  const { data, error, isLoading } = useGetPopularsMoviesQuery({
    page,
  });

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const movies = data?.results || [];
  return (
    <Container
      sx={{
        mt: 4,
        mb: 6,
        minHeight: "calc(100vh - 200px)",
      }}
    >
      <H2 mb={3}>Popular movies</H2>

      {isLoading ? (
        <Box
          width="100%"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"350px"}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {movies.map((item, index) => (
            <Grid item lg={4} sm={6} xs={12} key={index}>
              <MovieCard movie={item} />
            </Grid>
          ))}
        </Grid>
      )}

      {data && (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          mt={4}
        >
          <Span color="grey.600">
            {generatePageResultsInfo(
              data.page,
              data.total_results,
              movies.length
            )}
          </Span>
          <Pagination
            count={data.total_pages}
            variant="outlined"
            color="primary"
            page={data.page}
            onChange={handlePageChange}
          />
        </Box>
      )}
    </Container>
  );
};

export default HomeView;

export const shopList = [
  {
    id: "1",
    rating: 5,
    name: "Scarlett Beauty",
    phone: "(613) 343-9004",
    imgUrl: "/assets/images/faces/propic.png",
    coverImgUrl: "/assets/images/banners/cycle.png",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    email: "scarletbeaty@gmail.com",
    socialLinks: [
      {
        name: "facebook",
        url: "https://www.facebook.com/scarletbeauty",
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/scarletbeauty",
      },
      {
        name: "twitter",
        url: "https://www.twitter.com/scarletbeauty",
      },
    ],
  },
  {
    id: "2",
    rating: 5,
    name: "Scroll Through",
    phone: "(613) 343-9004",
    imgUrl: "/assets/images/faces/propic(1).png",
    coverImgUrl: "/assets/images/banners/banner.png",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    email: "scrollthrogh@gmail.com",
    socialLinks: [
      {
        name: "facebook",
        url: "https://www.facebook.com/scarletbeauty",
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/scarletbeauty",
      },
      {
        name: "twitter",
        url: "https://www.twitter.com/scarletbeauty",
      },
    ],
  },
  {
    id: "3",
    rating: 4.5,
    name: "Coveted Clicks",
    phone: "(613) 343-9004",
    imgUrl: "/assets/images/faces/propic(2).png",
    coverImgUrl: "/assets/images/banners/banner-3.png",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    email: "coverclocksh@gmail.com",
  },
  // {
  //   id: "4",
  //   rating: 4,
  //   phone: "(613) 343-9004",
  //   name: "Constant Shoppers",
  //   imgUrl: "/assets/images/faces/propic(3).png",
  //   coverImgUrl: "/assets/images/banners/banner-4.png",
  //   address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
  // },
  // {
  //   id: "5",
  //   rating: 5,
  //   name: "Keyboard Kiosk",
  //   phone: "(613) 343-9004",
  //   imgUrl: "/assets/images/faces/propic(4).png",
  //   coverImgUrl: "/assets/images/banners/banner-5.png",
  //   address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
  // },
  // {
  //   id: "6",
  //   rating: 5,
  //   name: "Anytime Buys",
  //   phone: "(613) 343-9004",
  //   imgUrl: "/assets/images/faces/propic(5).png",
  //   coverImgUrl: "/assets/images/banners/banner-6.png",
  //   address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
  // },
  // {
  //   id: "7",
  //   rating: 4,
  //   phone: "(613) 343-9004",
  //   name: "Word Wide Wishes",
  //   imgUrl: "/assets/images/faces/propic(6).png",
  //   coverImgUrl: "/assets/images/banners/banner-7.png",
  //   address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
  // },
  // {
  //   id: "8",
  //   rating: 5,
  //   name: "Cybershop",
  //   phone: "(613) 343-9004",
  //   imgUrl: "/assets/images/faces/propic(7).png",
  //   coverImgUrl: "/assets/images/banners/banner-8.png",
  //   address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
  // },
  // {
  //   id: "9",
  //   rating: 5,
  //   name: "Scarlett Beauty",
  //   phone: "(613) 343-9004",
  //   imgUrl: "/assets/images/faces/propic(8).png",
  //   coverImgUrl: "/assets/images/banners/banner-9.png",
  //   address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
  // },
];
