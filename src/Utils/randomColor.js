export const randomColor = () => {
  const colors = [
    "red",
    "green",
    "orange",
    "blue",
    "purple",
    "pink",
    "turquoise",
    "maroon",
    "grey",
    "yellow",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
