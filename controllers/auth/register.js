const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');

const { HttpError } = require('../../helpers');
const { User } = require('../../models/user');

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, 'Email in use');
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const avatarUrl = gravatar.url(email);
  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarUrl,
  });
  const responsUser = {
    email: newUser.email,
    subscription: newUser.subscription,
  };
  res.status(201).json({
    user: responsUser,
  });
};

module.exports = register;
