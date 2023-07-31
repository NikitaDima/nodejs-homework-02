const { ctrlWrapper } = require('../../helpers');

const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const getCurrent = require('./getCurrent');
const updateAvatar = require('./updateAvatar');
const verifyEmail = require('./verifyEmail');
const resendVerifeEmail = require('./resendVerifeEmail');

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  getCurrent: ctrlWrapper(getCurrent),
  updateAvatar: ctrlWrapper(updateAvatar),
  verifyEmail: ctrlWrapper(verifyEmail),
  resendVerifeEmail: ctrlWrapper(resendVerifeEmail),
};
