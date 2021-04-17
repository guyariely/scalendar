import { useState } from "react";

function useTheme(initial) {
  const [theme, setTheme] = useState(initial);

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  }

  return toggleTheme;
}

export { useTheme };
