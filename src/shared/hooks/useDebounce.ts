import { useCallback, useEffect, useRef, useState } from "react";

export const useDebounce = (callback: () => void, delay: number) => {
  const timer = useRef<NodeJS.Timeout>();

  const debounceCallback = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(callback, delay);
  }, [callback, delay]);

  return debounceCallback;
};
