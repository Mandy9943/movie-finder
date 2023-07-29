import { Box, BoxProps } from "@mui/material";

export interface FlexBoxProps extends BoxProps {
  children: React.ReactNode;
}

const FlexBox: React.FC<FlexBoxProps> = ({ children, ...props }) => (
  <Box display="flex" {...props}>
    {children}
  </Box>
);

export default FlexBox;
