export const tryParseInt = (str: string | number | null | undefined): number | null => {
  try {
    if (typeof str === 'number') return str;

    if (str === null || str === undefined || str.trim() === '') {
      return undefined;
    }

    const parsedInt = parseInt(str, 10);
    return Number.isNaN(parsedInt) ? null : parsedInt;
  } catch (e) {
    return undefined;
  }
};
