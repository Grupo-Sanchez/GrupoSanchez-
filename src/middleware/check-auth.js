const jwt = require('jsonwebtoken');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  try {
    console.log('########JWT########');
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Auth failed',
    });
  }
};