const { readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/subfolder/something.txt', 'utf8');
const second = readFileSync('./content/subfolder/test.txt', 'utf8');

console.log(first, second);

//writeFileSync('./content/helloWorld.txt', `Here it is: ${first, second}`); // second overwrites first
writeFileSync('./content/helloWorld.txt', `Here it is: ${first}, ${second}`, 
{flag: 'a'}); // appends a copy of 'value'

