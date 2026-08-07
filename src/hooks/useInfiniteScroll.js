import { useEffect, useRef } from 'react';

/**
 * Custom hook providing IntersectionObserver for infinite scrolling.
 * @param {Function} callback - Function triggered when observer element is visible.
 * @param {boolean} hasMore - Indicator if additional data pages exist.
 * @param {boolean} loading - Fetching state indicator.
 * @returns {React.RefObject} Target container ref.
 */
export const useInfiniteScroll = (callback, hasMore, loading) => {
  const observerRef = useRef(null);

  useEffect(() => {
    if (loading || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          callback();
        }
      },
      { threshold: 1.0 }
    );

    const currentTarget = observerRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [callback, hasMore, loading]);

  return observerRef;
};

export default useInfiniteScroll;