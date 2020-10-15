
export const randomColor = () => {
  const colors = ["red", "green", "orange", "blue"];
  const randomIndex =  Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}