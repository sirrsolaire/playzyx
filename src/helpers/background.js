export const background = (id) => {
  if (id === 5) {
    return "bg-exceptional";
  } else if (id === 4) {
    return "bg-recommended";
  } else if (id === 3) {
    return "bg-meh";
  } else if (id === 1) {
    return "bg-skip";
  }
};
