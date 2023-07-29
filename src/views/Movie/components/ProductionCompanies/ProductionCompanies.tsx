import { Avatar, Box, Card, Grid } from "@mui/material";
import FlexBox from "components/Flex/FlexBox";
import { H3, H4 } from "components/Typography/Typography";
import { logoBaseUrl } from "lib/themoMovieConst";

import { IProductionCompany } from "types/movie.interface";

interface IProps {
  companies: IProductionCompany[];
}
const ProductionCompanies = ({ companies }: IProps) => {
  return (
    <Box mb={7.5}>
      <H3 mb={3}>Production Companies</H3>

      <Grid container spacing={4}>
        {companies.map((item) => (
          <Grid item md={3} sm={4} xs={12} key={item.name}>
            <FlexBox
              justifyContent={"center"}
              alignItems={"center"}
              p={3.25}
              width="100%"
              component={Card}
              flexDirection="column"
              minHeight={"140px"}
            >
              <Avatar
                src={logoBaseUrl + item.logo_path}
                sx={{ width: "auto", height: 30 }}
              />
              <H4 mt={1.5} color="grey.800" textAlign={"center"}>
                {item.name}
              </H4>
            </FlexBox>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductionCompanies;
