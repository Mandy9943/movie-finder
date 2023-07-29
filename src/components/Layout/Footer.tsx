import { Box } from "@mui/material";
import FlexBox from "components/Flex/FlexBox";

const Footer = () => {
  return (
    <footer>
      <FlexBox
        height={"60px"}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        bgcolor={"white"}
      >
        made with{" "}
        <Box component={"span"} color={"red"} mx={"3px"}>
          {" "}
          &#x2764;
        </Box>{" "}
        by Armando Martin
      </FlexBox>
    </footer>
  );
};

export default Footer;
