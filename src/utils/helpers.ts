export const getCZDateFormat = (dateString: string): string => {
  const day = dateString.slice(8, 9) === '0'
    ? dateString.slice(9, 10)
    : dateString.slice(8, 10);
  const month = dateString.slice(5, 6) === '0'
    ? dateString.slice(6, 7)
    : dateString.slice(5, 7);
  const year = dateString.slice(0, 4);
  return `${day}. ${month}. ${year}`;
};