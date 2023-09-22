const readline = require('readline');

console.log('Имя: ');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});
rl.prompt();
let name = '';
rl.on('line', (input) => {
  rl.close();
  name = input;
});
