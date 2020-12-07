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

// PASO #2

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


// PASO #3
if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('Frontend/build'));

  // Express serve up index.html file if it doesn't recognize route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'Frontend', 'build', 'index.html'));
  });
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
