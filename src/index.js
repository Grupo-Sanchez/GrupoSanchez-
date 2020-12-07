// Cargar variables de ambiente
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const body = require('body-parser');
const path = require('path');
const fs = require('fs');

// Definimos ruta del backend (backend)
const api = require('./routers/api');

// Instanciamos express con un const llamado app para ultilizarlo a lo largo del desarollo
const app = express();

// Paso #1 para heroku deployment
// Especificamos el puerto
const port = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(body.urlencoded({ extended: true }));
app.use(body.json());
app.use(helmet());

// // Paso #2 heroku deployment

// // Nos conectamos a la base de datos por medio de mongoose
// // El proces busca donde se hizo el npm dotenv
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongoose.connection.on('connected', () => {
//   console.log('Conectado a la base de datos con exito');
// });

// // Finaliza proceso de coneccion a la base de datos por medio de mongoose

// Paso #2 heroku deployment
// Nos conectamos a la base de datos por medio de mongoose
// El proces busca donde se hizo el npm dotenv
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster.82jgc.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.error(err);
    console.log('Conectado a la base de datos con exito');
  },
);
// Finaliza proceso de coneccion a la base de datos por medio de mongoose

// Paso #3 heroku deployment
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('/Frontend/build'));
}

// Morgan es un log de la base de datos
if (!fs.existsSync('logs')) {
  fs.mkdirSync('logs');
}
const date = new Date();
const accessLogStream = fs.createWriteStream(
  path.join('logs', `${date.toLocaleDateString().replace(/\//g, '-')}.log`),
  { flags: 'a' },
);
app.use(morgan('tiny', { stream: accessLogStream }));
// Finaliza proceso de moran

// para esta ruta /api, vas a usar este router(segundo parametro)
app.use('/api', api);

// Especificamos el puerto sobre el que la applicacion va a correr
app.listen(port, () => {
  console.log(`La app esta corriendo en el puerto: ${port}`);
});
// Fin de la especificacion del puerto
