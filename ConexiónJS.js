const mysql = require('mysql');

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'nomina'
});

conexion.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos: ' + error.message);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});

//QUERY TABLA PERSONAL
conexion.query('SELECT * FROM Personal', (error, resultados, campos) => {
    if (error) {
      console.error('Error al realizar la consulta: ' + error.message);
      return;
    }
    console.log('Resultados de la consulta:', resultados);
  });
  
//QUERY TABLA DESCUENTOS
conexion.query('SELECT * FROM Descuentos', (error, resultados, campos) => {
    if (error) {
      console.error('Error al realizar la consulta: ' + error.message);
      return;
    }
    console.log('Resultados de la consulta:', resultados);
  });  
  
//QUERY TABLA DEVENGADOS
conexion.query('SELECT * FROM Devengados', (error, resultados, campos) => {
    if (error) {
      console.error('Error al realizar la consulta: ' + error.message);
      return;
    }
    console.log('Resultados de la consulta:', resultados);
  });  


  conexion.end();
  
