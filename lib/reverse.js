function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

export function reverse(str) {
  if (!isString(str)) {
    return null;
  }

  return str.split('').reverse().join('');
}
