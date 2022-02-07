/**
 * Sleep function.
 * @param {number} delay Delay in milliseconds.
 */
export default function sleep(delay: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
