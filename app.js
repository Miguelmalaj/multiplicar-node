const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

//const multiplicar = require('./multiplicar/multiplicar.js');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log(`Unrecognized Command`);

}


// let parametro = argv[2];
// let base = parametro.split('=')[1];