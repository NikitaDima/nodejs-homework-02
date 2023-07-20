const express = require('express');
const router = express.Router();
const { validateBody, authenticate } = require('../../middlewares');
const { schemas } = require('../../models/user');

const {
  register,
  login,
  getCurrent,
  logout,
} = require('../../controllers/auth');

router.post('/register', validateBody(schemas.registerSchema), register);
router.post('/login', validateBody(schemas.loginSchema), login);
router.post('./logout', authenticate, logout);
router.get('/current', authenticate, getCurrent);

module.exports = router;
