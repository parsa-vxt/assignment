export const fuzzyMatch = (text: string, query: string): boolean => {
   return text.toLowerCase().includes(query.toLowerCase());
};
