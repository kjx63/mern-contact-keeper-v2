const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const User = require('../models/User');
// @route     POST api/users
// @desc      Register a user
// @access    Public

router.post(
  '/',
  [
    // username must be an email
    body('name', 'Please add name').not().isEmpty(),
    body('email', ' Please include a valid email').isEmail(),
    // password must be at least 56 chars long
    body(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    }).then((user) => res.json(user));
  }
);

module.exports = router;
