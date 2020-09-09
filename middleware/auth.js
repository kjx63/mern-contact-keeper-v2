const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denited' });
  }

  try {
    // pull out the payload object (= decoded) which has a user id
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    /*
    decoded = {
      user: { id: '5f58*******2700513f56e99' },
      iat: 1599643915,
      exp: 1600003915,
    };
    */

    req.user = decoded.user;
    // console.log(req.user); // { id: '5f58*******2700513f56e99' }
    next();
  } catch (err) {
    console.log(err.message);
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
