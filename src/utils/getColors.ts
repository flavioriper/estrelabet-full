export const getLast = (value: number): string => {
  if (value <= 1.1) return 'bg-slate-400 text-white';
  if (value <= 1.99) return 'bg-slate-400 text-blue-500';
  if (value <= 9.99) return 'bg-green-200 text-purple-500';
  return 'bg-green-200 text-pink-500';
};
