export const decodeAndSplit = (str: string) =>
  decodeURIComponent(str).split("-", 1)[0];
