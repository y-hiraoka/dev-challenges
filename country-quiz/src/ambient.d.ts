type Append<T, U extends unknown[]> = ((x: T, ...y: U) => void) extends (...x: infer V) => void
  ? V
  : never;

declare type FixedLengthTuple<T, L extends number, R extends any[] = []> = {
  0: R;
  1: FixedLengthTuple<T, L, Append<T, R>>;
}[R["length"] extends L ? 0 : 1];
