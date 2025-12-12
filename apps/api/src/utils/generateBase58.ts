export const generateBase58 = (length: number): string => {
   const chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
   let result = '';
   for (let i = 0; i < length; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
   }
   return result;
};
