export const moveElement = (arr, fromIndex, toIndex) => {
  const newArr = Array.from(arr);
  const [element] = newArr.splice(fromIndex, 1);
  newArr.splice(toIndex, 0, element);
  return newArr;
};
