import {
  CSSObject,
  bgcolor,
  borderRadius,
  compose,
  spacing,
  styled,
} from "@mui/system";
import NextImage, { ImageProps } from "next/image";

interface LazyImageProps extends ImageProps {
  borderRadius?: CSSObject["borderRadius"];
}

const LazyImage = styled(({ borderRadius, ...rest }: LazyImageProps) => (
  <NextImage {...rest} />
))(compose(spacing, borderRadius, bgcolor));

export default LazyImage;
