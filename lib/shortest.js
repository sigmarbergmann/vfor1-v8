function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

function split(str, delimiter) {
  return str.split(delimiter);
}

export function shortest(str) {
  if (!isString(str)) {
    return null;
  }

  const words = split(str, ' ');

  let shortestWord = '';
  for (const word of words) {
    if (shortestWord === '' || word.length < shortestWord.length) {
      shortestWord = word;
    }
  }
  return shortestWord;
}
