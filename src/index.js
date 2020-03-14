const table = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '': ' ',
};

function decode(expr) {

   let str = expr.replace(/(\d)(?=(\d{10})+(\D|$))/g, '$1 ')
   let mass = str.replace(/10/g, '.') ;
   mass = mass.replace(/11/g, '-');
   mass = mass.replace(/[0]+/g, '');

   for(let i = 0; i<mass.length; i++){
        mass = mass.replace('**********', '  ');
    }
   
   mass = mass.split(' ');
  
  let res = mass.reduce((str, item) => {
  str += table[item];
  return str;
  
  }, '')

    return res;
}

module.exports = {
    decode
}


