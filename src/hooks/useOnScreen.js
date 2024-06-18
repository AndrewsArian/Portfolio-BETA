import { useState, useEffect } from "react";

function useOnScreen(ref, threshold = 0.3) {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        if (firstTime && entry.isIntersecting) {
          setIntersecting(true);
          setFirstTime(false);
        }
      },
      {
        rootMargin: "0px",
        threshold,
      }
    );
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, threshold, firstTime]); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}
export default useOnScreen;
