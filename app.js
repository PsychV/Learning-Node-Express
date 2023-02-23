let arr = [1, [2, [3, [4]]]];
console.log(arr);

const _ = require('lodash');

arr = _.flatMapDeep(arr);

console.log(arr);