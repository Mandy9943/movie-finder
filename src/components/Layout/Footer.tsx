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
        made with &#x2764; by Armando Martin
      </FlexBox>
    </footer>
  );
};

export default Footer;
