const fs = require('fs');
const colors = require('colors');
const path = require('path'); // Importa el módulo 'path' de Node.js


const crearArchivo = async (base = 5, listar = false, hasta = 10 ) => {
    try {
        let salida = '';
        // Genera la tabla de lo que se envíe en la base desde 1 hasta 'hasta'
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} ${'x'.yellow} ${i} ${'='.yellow} ${base * i} \n`;
        }

        // Si el parámetro 'listar' existe y es 'true', imprime la tabla en la consola
        if (listar) {
            console.log('===================='.blue);
            console.log(` Tabla del:`.red, colors.blue(base));
            console.log(` Hasta el:`.red, colors.blue(hasta));
            console.log('===================='.blue);
            console.log(salida);
        }

/*
        fs.writeFileSync(`tabla-${base}-hasta-${hasta}.txt`, salida);
        return `tabla-${base}-hasta-${hasta}.txt`;
        */
 // Construye la ruta completa del archivo de salida en la carpeta "salida"
        const carpetaSalida = path.join(__dirname, 'salida');
        if (!fs.existsSync(carpetaSalida)) {
            fs.mkdirSync(carpetaSalida);
        }

        const archivo = path.join(carpetaSalida, `tabla-${base}-hasta-${hasta}.txt`);
        
        // Utiliza la ruta completa para escribir el archivo
        fs.writeFileSync(archivo, salida).strip;

        return archivo; // Devuelve la ruta completa del archivo
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}
