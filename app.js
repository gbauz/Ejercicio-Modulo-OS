const os=require('os');
console.log('Tipo de sistema operativo:',os.type());
console.log('version del sistema operativo',os.release());
console.log('numero total de nucleos del cpu',os.cpus().length);
console.log('Memoria libre del sistema en bystes',os.totalmem());
