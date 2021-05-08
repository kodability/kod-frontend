/**
 * sleep 'millis' milliseconds.
 * @param millis milliseconds to sleep
 */
export const sleep = async (millis: number) =>
  new Promise((resolve) => setTimeout(resolve, millis));
