export const memoize = (fn: Function) => {
  const cache: any = {};
  return (...args: any) => {
    const stringArgs = JSON.stringify(args);
    if (cache[stringArgs]) {
      return cache[stringArgs];
    } else {
      const s = fn(...args);
      cache[stringArgs] = s;
      return s;
    }
  };
};

const rangeCrud = ({
  start = 0,
  end,
  distance = 1,
}: {
  start: number;
  end: number;
  distance: number;
}): number[] => {
  const res = [];
  let current = start;
  while (current <= end) {
    res.push(current);
    current += distance;
  }
  return res;
};
export const range = memoize(rangeCrud);
