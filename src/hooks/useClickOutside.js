import { useEffect } from "react";

function useClickOutside(ref, callback) {
  useEffect(() => {
    function handleClickOutside(e) {
      const { current } = ref;
      if (current && !current.contains(e.target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

export { useClickOutside };
