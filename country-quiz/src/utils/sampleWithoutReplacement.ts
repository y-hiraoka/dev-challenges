type Options<T, L extends number> = {
  list: T[];
  length: L;
};

export function sampleWithoutReplacement<T, L extends number>({
  list,
  length,
}: Options<T, L>): FixedLengthTuple<T, L> {
  const copiedList = list.slice();
  const result = [];

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * copiedList.length);
    result.push(...copiedList.splice(index, 1));
  }

  return result as any;
}
