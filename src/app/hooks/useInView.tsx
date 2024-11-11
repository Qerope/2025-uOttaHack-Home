import { useEffect, useState, useRef, MutableRefObject } from "react";

const useInView = (options: IntersectionObserverInit) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<any>(null); // Use 'any' to disable strict typing

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isInView };
};

export default useInView;
