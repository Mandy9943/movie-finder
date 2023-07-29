import { Box } from "@mui/material";
import Sticky from "components/Sticky/Sticky";
import { useCallback, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [isFixed, setIsFixed] = useState(false);
  const toggleIsFixed = useCallback((fixed: boolean) => setIsFixed(fixed), []);
  return (
    <Box bgcolor={"ghostwhite"}>
      {/* HEADER */}
      <Sticky fixedOn={0} onSticky={toggleIsFixed} scrollDistance={300}>
        <Header isFixed={isFixed} />
      </Sticky>

      <Box className="section-after-sticky" pb={1} minHeight={"70vh"}>
        {/* BODY CONTENT */}
        {children}
      </Box>

      <Footer />
    </Box>
  );
};

export default MainLayout;
