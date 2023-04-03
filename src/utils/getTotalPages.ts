export const getTotalPages = (totalResults: number, pageSize: number) => {
  if (pageSize === 0 || totalResults === 0) return 0;
  if (totalResults > 100) return Math.ceil(100 / pageSize);
  return Math.ceil(totalResults / pageSize);
};
