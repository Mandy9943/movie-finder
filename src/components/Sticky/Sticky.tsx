import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/styled-engine";
import clsx from "clsx";
import React, { useCallback, useEffect, useRef, useState } from "react";

export const slideDown = keyframes`
    from {transform: translateY(-200%)}
    to {transform: translateY(0)}
`;

interface StyledBoxProps {
  componentHeight: number;
  fixedOn: number;
  fixed: boolean;
}

export const StyledBox = styled("div")<StyledBoxProps>(
  ({ theme, componentHeight, fixedOn, fixed }) => ({
    "& .hold": {
      zIndex: 2,
      boxShadow: "none",
      position: "relative",
    },
    "& .fixed": {
      left: 0,
      right: 0,
      zIndex: 1500,
      position: "fixed",
      top: `${fixedOn}px`,
      boxShadow: theme.shadows[2],
      transition: "all 350ms ease-in-out",
      animation: `${slideDown} 400ms ${theme.transitions.easing.easeInOut}`,
    },
    "& + .section-after-sticky": {
      paddingTop: fixed ? componentHeight : 0,
    },
  })
);

interface StickyProps {
  fixedOn: number;
  scrollDistance?: number;
  containerRef?: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
  notifyPosition?: number;
  notifyOnScroll?: (isSticky: boolean) => void;
  onSticky?: (isSticky: boolean) => void;
}

const Sticky = ({
  fixedOn,
  scrollDistance = 0,
  containerRef,
  children,
  notifyPosition,
  notifyOnScroll,
  onSticky,
}: StickyProps) => {
  const [fixed, setFixed] = useState<boolean>(false);
  const [parentHeight, setParentHeight] = useState<number>(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef<number>(0);

  const scrollListener = useCallback(() => {
    if (!window) return;

    // Distance of element from window top (-) minus value
    let distance = window.pageYOffset - positionRef.current;

    if (containerRef?.current) {
      let containerDistance =
        containerRef.current.offsetTop +
        containerRef.current?.offsetHeight -
        window.pageYOffset;

      if (notifyPosition && notifyOnScroll) {
        notifyOnScroll(
          distance <= notifyPosition && containerDistance > notifyPosition
        );
      }

      return setFixed(distance <= fixedOn && containerDistance > fixedOn);
    }

    if (notifyPosition && notifyOnScroll) {
      notifyOnScroll(distance >= notifyPosition);
    }

    let isFixed = distance >= fixedOn + scrollDistance;

    if (positionRef.current === 0) {
      const elementPosition = elementRef.current?.offsetTop || 0;
      isFixed = distance >= fixedOn + elementPosition + scrollDistance;
    }

    setFixed(isFixed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!window) return;

    window.addEventListener("scroll", scrollListener);
    window.addEventListener("resize", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
      window.removeEventListener("resize", scrollListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!positionRef.current) {
      const elementPosition = elementRef.current?.offsetTop || 0;
      positionRef.current = elementPosition;
    }

    setParentHeight(elementRef.current?.offsetHeight || 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef.current, children]);

  useEffect(() => {
    if (onSticky) onSticky(fixed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fixed]);

  return (
    <StyledBox fixedOn={fixedOn} componentHeight={parentHeight} fixed={fixed}>
      <div
        className={clsx({
          hold: !fixed,
          fixed: fixed,
        })}
        ref={elementRef}
      >
        {children}
      </div>
    </StyledBox>
  );
};

export default Sticky;
