/**
 * Sýnilausn á verkefni 8 í Vefforritun 1, 2024.
 * Byggir á sýnilausn á verkefni 7.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

import { isString, splitOnWhitespace } from './lib/helpers.js';
import { longest } from './lib/longest.js';
import { shortest } from './lib/shortest.js';
import { reverse } from './lib/reverse.js';
import { palindrome } from './lib/palindrome.js';
import { vowels } from './lib/vowels.js';
import { consonants } from './lib/consonants.js';

const test = isString('hæ');
console.log('test er strengur?', test); 

const stringWithWhitespace = 'halló\n\theimur\nhæ';
const split = splitOnWhitespace(stringWithWhitespace);
console.log(split);

const textareaElement = document.querySelector('textarea');
console.log(textareaElement);
const formElement = document.querySelector('form');

function submitHandler(event) {
  event.preventDefault();
  const { target } = event;
  const textareaElement = target.querySelector('textarea');
  console.log('textareaElement inniheldur', textareaElement.value);
}

formElement.addEventListener('submit', submitHandler);

/**
 * Function to remove the 'hidden' class from an element
 * @param {Element} el
 */
function removeHidden(el) {
  el.classList.remove('hidden');
}

const outputElement = document.querySelector('.output');
if (outputElement) {
  removeHidden(outputElement);
}

document.getElementById('string')?.addEventListener('input', function () {
  const textareaElement = document.getElementById('string');
  if (!textareaElement) return;

  const longestElement = document.querySelector('.longest');
  const shortestElement = document.querySelector('.shortest');
  const reverseElement = document.querySelector('.reversed');
  const palindromeElement = document.querySelector('.palindrome');
  const vowelCountElement = document.querySelector('.vowels');
  const consonantCountElement = document.querySelector('.consonants');
  const inputDisplayElement = document.querySelector('code .input');

  if (longestElement && shortestElement && reverseElement && palindromeElement && vowelCountElement && consonantCountElement && inputDisplayElement) {
    const longestWord = longest(textareaElement.value);
    const shortestWord = shortest(textareaElement.value);
    const reversedString = reverse(textareaElement.value);
    const isPalindrome = palindrome(textareaElement.value) ? '' : 'ekki';
    const vowelCount = vowels(textareaElement.value);
    const consonantCount = consonants(textareaElement.value);

    longestElement.textContent = longestWord;
    shortestElement.textContent = shortestWord;
    reverseElement.textContent = reversedString;
    palindromeElement.textContent = `${isPalindrome}`;
    vowelCountElement.textContent = `${vowelCount}`;
    consonantCountElement.textContent = `${consonantCount}`;
    inputDisplayElement.textContent = textareaElement.value;
  }
});
