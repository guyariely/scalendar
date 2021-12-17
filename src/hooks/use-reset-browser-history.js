import { useEffect } from "react";

export function useResetBrowserHistory(depArray) {
  useEffect(() => {
    window.history.replaceState(null, null, "/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, depArray);
}
