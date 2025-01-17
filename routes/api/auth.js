const express = require('express');
const router = express.Router();
const { validateBody, authenticate, upload } = require('../../middlewares');
const { schemas } = require('../../models/user');

const {
  register,
  login,
  getCurrent,
  logout,
  updateAvatar,
} = require('../../controllers/auth');

router.post('/register', validateBody(schemas.registerSchema), register);
router.post('/login', validateBody(schemas.loginSchema), login);
router.post('/logout', authenticate, logout);
router.get('/current', authenticate, getCurrent);
router.patch('/avatars', authenticate, upload.single('avatar'), updateAvatar);

module.exports = router;
