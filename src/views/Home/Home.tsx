import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Pagination,
} from "@mui/material";
import MainLayout from "components/Layout/Layout";
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
    <MainLayout>
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
    </MainLayout>
  );
};

export default HomeView;
