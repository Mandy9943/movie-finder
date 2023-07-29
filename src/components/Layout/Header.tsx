import { Box, styled } from "@mui/material";
import Container from "@mui/material/Container";
import clsx from "clsx";
import FlexBox from "components/Flex/FlexBox";
import Link from "components/Link/Link";
import { H2 } from "components/Typography/Typography";
import Image from "next/image";

interface HeaderProps {
  isFixed: boolean;
  className?: string;
  searchBoxType?: "type1" | "type2";
}

export const HeaderWrapper = styled(Box)(({ theme }) => ({
  zIndex: 3,
  position: "relative",
  height: 80,
  transition: "height 250ms ease-in-out",
  background: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: {
    height: 64,
  },
}));

const Header = ({ className }: HeaderProps) => {
  return (
    <HeaderWrapper className={clsx(className)}>
      <Container
        sx={{
          gap: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FlexBox mr={2} minWidth="170px" alignItems="center">
          <Link href="/" sx={{ textDecoration: "none" }}>
            <FlexBox alignItems={"center"} gap={2}>
              <Image height={55} width={55} src="/logo.jpg" alt="logo" />
              <H2>Moviefinder</H2>
            </FlexBox>
          </Link>
        </FlexBox>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
