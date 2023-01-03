
export default function Either<T, L, R>(handle: () => T, left: L, right: R) {
  try {
    if (handle()) {
      return right;
    } else {
      return left;
    }
  } catch (e) {
    return left;
  }
}