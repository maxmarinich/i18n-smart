export const endsIn = (value: number, params: Array<number> = []): boolean => {
  const endChar = String(value).slice(-1);

  return params.includes(Number(endChar));
};
