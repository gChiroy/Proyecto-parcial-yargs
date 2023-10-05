const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })

    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        describe: 'Muestra la tabla con consola'
    })

    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'Número hasta el cual se generará la tabla de multiplicar'
    })

    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número';
        }
        if (argv.h && isNaN(argv.h)) {
            throw 'El valor de --hasta debe ser un número';
        }
        return true;
    })
    .argv;

module.exports = argv;
