const caesarCipher = (string, key) => {
  let decrypt = '';
  for(let i = 0; i < string.length; i+=1){
    
    let ascii = string[i].charCodeAt();
		let asciiPos;
		if (ascii >= 65 && ascii <= 90 ) {
      asciiPos = 65
		} else {
			asciiPos = 97
		}
		let currentPosition = string[i].charCodeAt() - asciiPos
	
		let sum = currentPosition + key;
		let remainder = sum % 26
    if (ascii >= 65 && ascii <= 90 && sum > 25){
      
			decrypt += String.fromCharCode(remainder + 65 )
    } else if (ascii >= 97 && ascii <= 122 && sum > 25) {

			decrypt += String.fromCharCode(remainder + 97 )
    } else if (ascii >= 65 && ascii <= 90 && sum <= 25){
      
			decrypt += String.fromCharCode(ascii + key )
    } else if (ascii >= 97 && ascii <= 122 && sum <= 25) {

			decrypt += String.fromCharCode(ascii + key )
    }
    else {
      decrypt += string[i]
    }
  }
	
  return decrypt
}

module.exports = caesarCipher;