function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

function split(str, delimiter) {
  return str.split(delimiter);
}

export function longest(str) {
  if (!isString(str)) {
    return null;
  }

  const words = split(str, ' ');

  let longestWord = '';
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}


