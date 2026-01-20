// chalk-npm //
import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));

// figlet-npm //
import figlet from "figlet";

async function doStuff() {
  const text = await figlet.text("Hello World!!");
  console.log(text);
}

doStuff();