export const addComma = (str: string): string => {
  if (str.length < 4) return str;
  return str.slice(0, -3) + ',' + str.slice(-3);
};
