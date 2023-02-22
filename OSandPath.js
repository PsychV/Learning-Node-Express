const os = require('os'); // no ./ to get the built in module

const user = os.userInfo();

console.log(user);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);

console.log(os.uptime());

const path = require('path');
console.log(path.sep); // separator used by this os

const filePath = path.join('/content///subfolder/something.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'something.txt');
console.log(absolute);