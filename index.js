// index.js
const sum = require('./alter');


// Importiere Chalk-Paket
const chalk = require('chalk');


// Rufe die Funktion dreimal auf
sum(3, 5);
sum(10, 20);
sum(7, 13);

// Verwende Chalk, um den Output bunt zu machen
console.log(chalk.blue.bold('Das ist ein bunter Text!'));