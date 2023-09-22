const readline = require('readline');
const Quest = require('./QA');
const Users = require('./users');
const fs = require('fs/promises');

function getName() {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: '> ',
    });

    console.log('Привет, как тебя зовут? ');

    rl.prompt();

    rl.on('line', (input) => {
      const name = input.trim();
      if (name) {
        rl.close();
        resolve(name);
      } else {
        console.log('Пожалуйста, введите ваше имя:');
        rl.prompt();
      }
    });
  });
}
function play(theme) {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: '> ',
    });

    console.log(`${theme}`);

    rl.prompt();

    rl.on('line', (input) => {
      const userAnswer = input.trim();
      if (userAnswer) {
        rl.close();
        resolve(userAnswer);
      } else {
        console.log('Пожалуйста, выбери тему');
        rl.prompt();
      }
    });
  });
}
function choose(name) {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: '> ',
    });

    console.log(`${name} Выбери тему: \n 1. Общие 2. Не общие 3. Любые`);

    rl.prompt();

    rl.on('line', (input) => {
      const num = input.trim();
      if (name) {
        rl.close();
        resolve(num);
      } else {
        console.log(`${name} Выбери тему: \n 1. Общие 2. Не общие 3. Любые`);
        rl.prompt();
      }
    });
  });
}
async function main() {
  try {
    const name = await getName();
    const user = new Users(name);
    let counter = '';
    let kek = 3;
    for (let i = 0; i < kek; i += 1) {
      const num = await choose(name);
      if (counter === num) {
        console.clear();
        kek += 1;
        console.log('Эту тему ты уже выбирал');
      } else {
        counter = num;
        const theme = new Quest(num);
        for (let i = 0; i < theme.quest().length; i += 1) {
          const answ = await play(theme.quest()[i]);
          if (answ.toLowerCase() === theme.answer()[i].toLowerCase()) {
            console.log('Молодец!');
            user.plusScore(100);
            console.log(`Ваши очки: ${user.score}`);
          } else {
            console.log(
              `Ошибочка вышла... \nПравильный ответ: ${theme.answer()[i]}`
            );
            user.minusScore(100);
            console.log(`Ваши очки: ${user.score}`);
          }
          fs.writeFile(
            `${__dirname}/usersScore/${name}-Score.txt`,
            `name: ${user.name}\nscore:${user.score}`
          );
        }
        console.clear();
      }
    }
  } catch (error) {
    console.error('Произошла ошибка:', error);
  }
}

main();
