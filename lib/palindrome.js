import { reverse } from './reverse.js';

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

export function palindrome(str) {
  if (!isString(str)) {
    return false;
  }

  if (str === '') {
    return false;
  }

  const reversed = reverse(str);

  if (!isString(reversed)) {
    return false;
  }

  return str.toLocaleLowerCase() === reversed.toLocaleLowerCase();
}
