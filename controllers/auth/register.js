const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const { nanoid } = require('nanoid');

const { HttpError, sendEmail } = require('../../helpers');
const { User } = require('../../models/user');

require('dotenv').config();
const { BASE_URL } = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, 'Email in use');
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const avatarUrl = gravatar.url(email);
  const verificationToken = nanoid();
  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarUrl,
    verificationToken,
  });
  const verifyEmail = {
    to: email,
    subject: 'Verify email',
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Click verify email</a>`,
  };
  await sendEmail(verifyEmail);
  const responsUser = {
    email: newUser.email,
    subscription: newUser.subscription,
  };
  res.status(201).json({
    user: responsUser,
  });
};

module.exports = register;
