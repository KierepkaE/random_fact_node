const fetch = require('node-fetch');
const arg = process.argv[2];
const equalSign = arg.search('=');
const number = arg.slice(equalSign + 1);
let type = '';

if (arg.indexOf("--year") === 0) {
  type = 'year';
} else if (arg.indexOf("--math") === 0) {
  type = 'math';
} else if (arg.indexOf("--trivia") === 0) {
  type = 'trivia';
};

if (equalSign === -1) console.log('You have to give a number.');


fetch(`http://numbersapi.com/${number}/${type}?json`)
  .then(response => {
    if (number === "" || isNaN(number)) {
      console.log('Only numbers are valid.');
      process.exit();
    }
    return response.json()
  })
  .then(data => console.log(data.text))
  .catch(err => console.log("Error:", err))