function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

function split(str, delimiter) {
  return str.split(delimiter);
}

export function consonants(str) {
  if (!isString(str)) {
    return 0;
  }

  const consonantsList = 'bdðfghjklmnpqrstvxþ'; 
  const characters = split(str, ''); 

  let count = 0;

  for (const char of characters) {
    if (consonantsList.includes(char.toLowerCase())) {
      count++;
    }
  }

  return count;
}
