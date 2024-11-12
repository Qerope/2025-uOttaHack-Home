import { useState, useEffect } from "react";

const useIsMobile = (breakpoint = 768): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Initial check
    handleResize();

    // Add event listener to update on resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;