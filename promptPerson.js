var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var realPerson = {
    name: '',
    saying: []
}
rl.question("What is the name of the real person? ", function(answer) {
    realPerson.name = answer;
    rl.setPrompt(`What would ${realPerson.name} say? `);
    rl.prompt();
    rl.on('line', function(saying) {
        console.log(saying.trim());
    });
});
