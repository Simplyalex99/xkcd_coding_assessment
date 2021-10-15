import { useEffect } from "react";

export const useOnClickOutside = ({ ref, handler }) => {
  useEffect(() => {
    const listener = (event) => {
      const element = ref?.current;

      // Do nothing if clicking ref's element or descendent elements
      if (!element || element.contains(event.target)) {
        return;
      }

      handler();
    };

    document.addEventListener(`mousedown`, listener);
    document.addEventListener(`touchstart`, listener);
    // the following prevents data leak
    return () => {
      document.removeEventListener(`mousedown`, listener);
      document.removeEventListener(`touchstart`, listener);
    };

    // Reload only if ref or handler changes
  }, [ref, handler]);
};

export default useOnClickOutside;
