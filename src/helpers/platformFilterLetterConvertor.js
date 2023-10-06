export const formattedSlug = (slug) => {
  return slug
    .replace(/-/g, " ") // Replace "-" with space
    .replace(/([a-z])([0-9])/gi, "$1 $2") // Add space between letters and numbers
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
};
