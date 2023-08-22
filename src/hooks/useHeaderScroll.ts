import { useCallback, useEffect, useRef, useState } from 'react';

export const useHeaderScroll = () => {
  const scrollY = useRef(0);

  const [isHiddenHeader, setHiddenHeader] = useState(false);

  useEffect(() => {
    setHiddenHeader(false);
    scrollY.current = 0;
  }, []);

  const setHeaderVisibility = useCallback(
    (y: number) => {
      if (y > scrollY.current && !isHiddenHeader) {
        setHiddenHeader(true);
      } else if (y < scrollY.current && isHiddenHeader) {
        setHiddenHeader(false);
      }
    },
    [isHiddenHeader, scrollY, setHiddenHeader],
  );

  const setScrollYOnScrollBeginDrag = useCallback((y: number) => {
    scrollY.current = y;
  }, []);

  return { isHiddenHeader, setHeaderVisibility, setScrollYOnScrollBeginDrag };
};
