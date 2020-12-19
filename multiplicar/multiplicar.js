const fs = require('fs');
const colors = require('colors');

const listarTabla = ( base, limite = 10 ) => {
    if (!Number(base) || !Number(limite)) {
      throw new (`Error: Se esperaba números, en su lugar se recibió ${ base } y ${ limite }`);
    }
    let tabla = '';
    for (let i = 1; i <= limite; i++) {
      tabla += `${ base } * ${ i } = ${ base * i }\n`;
    }
    console.log('==============================================='.blue);
    console.log('==============================================='.blue);
    console.log('==============================================='.white);
    console.log('==============================================='.white);
    console.log('==============================================='.red);
    console.log(`====================== ${ base } ======================`.red);
    console.log('==============================================='.red);
    console.log('==============================================='.white);
    console.log('==============================================='.white);
    console.log('==============================================='.blue);
    console.log('==============================================='.blue);
    console.log(tabla.green);
}

const crearArchivo = ( base, limite = 10 ) => {
  return new Promise((resolve, reject) => {
    if (!Number(base) || !Number(limite)) {
      reject(`Error: Se esperaba un número, en su lugar se recibió ${base} y ${ limite }`);
      return;
    }
    let data = '';
    for (let i = 1; i <= limite; i++) {
      data += `${ base } * ${ i } = ${ base * i }\n`;
    }
    fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
      if (err)
        reject(err);
      else
        resolve(`tabla-${base}.txt`);
    });
  });
}

module.exports = {
  crearArchivo,
  listarTabla
}