import { useRef, useEffect, useCallback } from "react";
const useScrollFadeIn = (direction = "up", duration = 1, delay = 0) => {
  const element = useRef();
  const handleDirection = (name) => {
    switch (name) {
      case "up":
        return "translate3d(0, 5vw, 0)";
      case "down":
        return "translate3d(0, -5vw, 0)";
      case "left":
        return "translate3d(150px, 0, 0)";
      case "right":
        return "translate3d(-150px, 0, 0)";
      default:
        return;
    }
  };
  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = element;

      if (entry.isIntersecting) {
        current.style.transitionProperty = "all";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = "translate3d(0, 0, 0)";
      } else {
        current.style.transitionProperty = "all";
        current.style.transitionDuration = `0s`;
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.transitionDelay = `0s`;
        current.style.opacity = 0;
        if (direction === "up") {
          current.style.transform = "translate3d(0, 5vw, 0)";
        } else if (direction === "down") {
          current.style.transform = "translate3d(0, -5vw, 0)";
        } else if (direction === "left") {
          current.style.transform = "translate3d(60px, 0, 0)";
        } else if (direction === "right") {
          current.style.transform = "translate3d(-60px, 0, 0)";
        }
      }
    },
    [delay, duration, direction]
  );
  useEffect(() => {
    let observer;
    const { current } = element;
    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.8 });
      observer.observe(current);
    }
    return () => observer && observer.disconnect();
  }, [handleScroll]);
  return {
    ref: element,
    style: {
      opacity: 0,
      transform: handleDirection(direction),
    },
  };
};
export default useScrollFadeIn;
