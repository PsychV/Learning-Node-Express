// GLOBALS
// __dirname -> path to current directory
// __filename -> file name
// require -> function to use modules (commonJS)
// module -> info about current module (file)
// process -> info about the enviroment where the program is being executed

console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(module);
console.log(process);

const name = require("./moduleExportObjectTechnique.js");

console.log(name.name);


const nice = require("./moduleExportPropertiesTechnique.js");

console.log(nice.items);
console.log(nice.singlePerson);

//require('./invokeFuctionsWithExport'); // Adding function call inside a module. Will call the function when exportet.
const invoke = require('./invokeFuctionsWithExport'); // Even if we try to store the export. But only once.
require('./invokeFuctionsWithExport');
require('./invokeFuctionsWithExport');
require('./invokeFuctionsWithExport');