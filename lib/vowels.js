function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

function split(str, delimiter) {
  return str.split(delimiter);
}

export function vowels(str) {
  if (!isString(str)) {
    return 0;
  }

  const vowelsList = 'aeiouyáéýúíóöæ';
  const characters = split(str, '');

  let count = 0;

  for (const char of characters) {
    if (vowelsList.includes(char.toLowerCase())) {
      count++;
    }
  }

  return count;
}
