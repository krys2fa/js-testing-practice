/* eslint-disable no-restricted-syntax */
const caesarCipher = (string, key) => {
  let decrypt = '';

  for (const element of string) {
    const ascii = element.charCodeAt();
    let asciiPos;
    if (ascii >= 65 && ascii <= 90) {
      asciiPos = 65;
    } else {
      asciiPos = 97;
    }
    const currentPosition = element.charCodeAt() - asciiPos;

    const sum = currentPosition + key;
    const remainder = sum % 26;
    if (ascii >= 65 && ascii <= 90 && sum > 25) {
      decrypt += String.fromCharCode(remainder + 65);
    } else if (ascii >= 97 && ascii <= 122 && sum > 25) {
      decrypt += String.fromCharCode(remainder + 97);
    } else if (ascii >= 65 && ascii <= 90 && sum <= 25) {
      decrypt += String.fromCharCode(ascii + key);
    } else if (ascii >= 97 && ascii <= 122 && sum <= 25) {
      decrypt += String.fromCharCode(ascii + key);
    } else {
      decrypt += element;
    }
  }

  return decrypt;
};

module.exports = caesarCipher;
