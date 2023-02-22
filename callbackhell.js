const { readFile, writeFile} = require('fs'); //Async methods
// mini callback hell
console.log('starting...');
readFile('./content/subfolder/something.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    console.log('i am done with first');
    readFile('./content/subfolder/test.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        console.log('i am done with second');
        writeFile('./content/helloWorld.txt',
        `Here it is: ${first}, ${second}`,
        (err, result) => {
            if (err) {
                console.log(err)
                return
            }
        console.log('i am done with writing')
    })   
  })  
}) 
console.log('i am done with callback hell!');