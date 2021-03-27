// import { Redirect } from 'react-router-dom';

const jwt = require('jsonwebtoken');
// const { Redirect } = require('react-router');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  try {
    // eslint-disable-next-line no-console
    console.log('Checking auth');
    console.log('Prueba: ', req.headers.authorization);
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Fallo token',
    });
  }
};
