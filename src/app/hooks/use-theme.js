import { useState, useEffect } from "react";

function useTheme() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const lastTheme = localStorage.getItem("theme");
    if (!lastTheme) localStorage.setItem("theme", "light");
    setTheme(lastTheme || "light");
    document.documentElement.setAttribute("data-theme", lastTheme || "light");
  }, []);

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }

  return toggleTheme;
}

export { useTheme };
