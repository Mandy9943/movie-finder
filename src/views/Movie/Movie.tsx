import { Box, CircularProgress, Container } from "@mui/material";
import MainLayout from "components/Layout/Layout";
import { useRouter } from "next/router";
import { useGetMovieQuery } from "services/api";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import ProductionCompanies from "./components/ProductionCompanies/ProductionCompanies";

const MovieView = () => {
  const routes = useRouter();

  const { data, isLoading } = useGetMovieQuery(routes.query.id as string);

  console.log("data", data);

  return (
    <MainLayout>
      <Container
        sx={{
          my: 4,
        }}
      >
        {isLoading || !data ? (
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
          <>
            <MovieDetail movie={data} />

            <ProductionCompanies companies={data.production_companies} />
          </>
        )}
      </Container>
    </MainLayout>
  );
};

export default MovieView;
