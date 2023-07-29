/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Grid, Rating } from "@mui/material";
import FlexBox from "components/Flex/FlexBox";
import Link from "components/Link/Link";
import { H1, H2, H6 } from "components/Typography/Typography";
import { posterBaseUrl } from "lib/themoMovieConst";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import { IExtendedMovie } from "types/movie.interface";

interface IProps {
  movie: IExtendedMovie;
}

const MovieDetail: React.FC<IProps> = ({ movie }) => {
  const releaseDate = new Date(movie.release_date || "");

  return (
    <Box width="100%">
      <Grid container spacing={3} justifyContent="space-around">
        <Grid item md={6} xs={12} alignItems="center">
          <FlexBox justifyContent="center" mb={6}>
            <Image
              width={500}
              height={700}
              alt={movie.title || ""}
              loading="eager"
              src={posterBaseUrl + movie.poster_path}
              priority
              style={{
                height: "auto",
                width: "100%",
              }}
              layout="reponsive"
            />
          </FlexBox>
        </Grid>

        <Grid item md={6} xs={12} alignItems="center">
          <H1>{movie.original_title}</H1>

          <Box mb={2}>
            <H2 color={"purple"}>{movie.tagline}</H2>
          </Box>

          <Box mb={2}>
            <H6>Descripción:</H6>
            <Box>{movie.overview}</Box>
          </Box>

          {movie.budget ? (
            <FlexBox mb={2} alignItems={"center"} gap={1}>
              <H6>Budget:</H6>
              <Box>$ {movie.budget.toLocaleString()}</Box>
            </FlexBox>
          ) : null}

          <FlexBox mb={2} alignItems={"center"} gap={1}>
            <H6>Revenue:</H6>
            <Box>$ {movie.revenue.toLocaleString()}</Box>
          </FlexBox>

          <FlexBox mb={2} alignItems={"center"} gap={1}>
            <H6>
              {new Date().getTime() > releaseDate.getTime()
                ? "Released"
                : "Release"}
              :
            </H6>
            <Box>{releaseDate.toLocaleDateString()}</Box>
          </FlexBox>
          <FlexBox mb={2} gap={1}>
            <H6>Spoken Languages:</H6>
            <Box>
              {movie.spoken_languages.map((sl) => sl.english_name).join(", ")}
            </Box>
          </FlexBox>
          <FlexBox mb={2} gap={1}>
            <H6>Genres:</H6>
            <Box>{movie.genres.map((g) => g.name).join(", ")}</Box>
          </FlexBox>

          <FlexBox mb={2} alignItems={"center"} gap={1}>
            <H6>Production Countries:</H6>
            <FlexBox gap={1}>
              {" "}
              {movie.production_countries.map((c) => {
                return (
                  <ReactCountryFlag
                    key={c.name}
                    countryCode={c.iso_3166_1}
                    svg
                  />
                );
              })}
            </FlexBox>
          </FlexBox>

          {/* <FlexBox mb={2} alignItems={"center"} gap={1}>
            <H6>Production Companies:</H6>
            <FlexBox gap={1}>
              {" "}
              {movie.production_companies.map((c) => {
                return (
                  <Image
                    width={90}
                    height={30}
                    key={c.id}
                    src={logoBaseUrl + c.logo_path}
                    alt={c.name}
                    style={{
                      widows: "auto",
                      height: "40px",
                    }}
                  />
                );
              })}
            </FlexBox>
          </FlexBox> */}

          <FlexBox alignItems="center" mb={2}>
            <H6 lineHeight="1">Calidad:</H6>
            <FlexBox alignItems="center" mx={1} lineHeight="1">
              <Rating
                max={10}
                value={movie.vote_average || 0}
                precision={0.2}
                color="warn"
                size="small"
                readOnly
              />
            </FlexBox>
          </FlexBox>

          <FlexBox mb={2} alignItems={"center"} gap={1}>
            <H6>Website:</H6>
            <Link
              href={movie.homepage}
              rel="noopener noreferrer"
              target="_blank"
            >
              {movie.homepage}
            </Link>
          </FlexBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MovieDetail;
