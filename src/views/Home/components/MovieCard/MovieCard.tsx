import { East } from "@mui/icons-material";
import BoyIcon from "@mui/icons-material/Boy";
import ManIcon from "@mui/icons-material/Man";
import StarIcon from "@mui/icons-material/Star";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import {
  Avatar,
  Box,
  Card,
  IconButton,
  Rating,
  alpha,
  styled,
} from "@mui/material";
import Link from "components/Link/Link";
import { H3, Span } from "components/Typography/Typography";
import {
  backdropBaseUrl,
  movieApiconfigurations,
  posterBaseUrl,
} from "lib/themoMovieConst";
import { IMovie } from "types/movie.interface";
interface ContentWrapperProps {
  imgUrl?: string;
}

const ContentWrapper = styled(Box)<ContentWrapperProps>(
  ({ theme, imgUrl }) => ({
    color: "white",
    backgroundSize: "cover",
    padding: "17px 30px 56px",
    backgroundPosition: "center",
    backgroundImage: `linear-gradient(to bottom,
    ${alpha(theme.palette.grey[900], 0.8)}, ${alpha(
      theme.palette.grey[900],
      0.8
    )}), 
    url(${backdropBaseUrl + imgUrl})`,
  })
);

interface IProps {
  movie: IMovie;
}
const MovieCard = ({ movie }: IProps) => {
  // props list
  return (
    <Card>
      <ContentWrapper imgUrl={movie.backdrop_path}>
        <H3
          fontWeight="600"
          mb={1}
          textOverflow={"ellipsis"}
          // @ts-ignore
          whiteSpace={"nowrap !important"}
          overflow={"hidden"}
        >
          {movie.title}
        </H3>

        <Rating
          max={10}
          value={movie.vote_average || 0}
          precision={0.2}
          color="warn"
          size="small"
          readOnly
          emptyIcon={
            <StarIcon
              sx={{
                color: "gray",
              }}
              fontSize="inherit"
            />
          }
          sx={{
            mb: "0.75rem",
          }}
        />

        <Box display="flex" mb={1} gap={1}>
          {movie.adult ? (
            <>
              <BoyIcon
                sx={{
                  fontSize: 17,
                  mt: "3px",
                }}
              />

              <Span color="white">Only for adults</Span>
            </>
          ) : (
            <>
              <ManIcon
                sx={{
                  fontSize: 17,
                  mt: "3px",
                }}
              />

              <Span color="white">Adults and childs</Span>
            </>
          )}
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          <TheaterComedyIcon
            fontSize="small"
            sx={{
              fontSize: 17,
            }}
          />
          <Span
            color="white"
            textOverflow={"ellipsis"}
            // @ts-ignore
            whiteSpace={"nowrap !important"}
            overflow={"hidden"}
          >
            {movieApiconfigurations.genres
              .filter((gen) => movie.genre_ids.includes(gen.id))
              .map((gen) => gen.name)
              .join(", ")}
          </Span>
        </Box>
      </ContentWrapper>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pl={3}
        pr={1}
      >
        <Avatar
          src={posterBaseUrl + movie.poster_path}
          sx={{
            width: 64,
            height: 64,
            mt: "-32px",
            border: "3px solid",
            borderColor: "grey.100",
          }}
        />
        <Link href={`movie/${movie.id}`}>
          <IconButton
            sx={{
              my: 0.5,
            }}
          >
            <East
              sx={{
                fontSize: 19,
                transform: ({ direction }) =>
                  `rotate(${direction === "rtl" ? "180deg" : "0deg"})`,
              }}
            />
          </IconButton>
        </Link>
      </Box>
    </Card>
  );
};

export default MovieCard;
