const { HttpError, sendEmail } = require('../../helpers');
const { User } = require('../../models/user');
require('dotenv').config();
const { BASE_URL } = process.env;

const resendVerifeEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, 'User not found');
  }
  if (user.verify) {
    throw HttpError(401, 'User already verify');
  }
  const verifyEmail = {
    to: email,
    subject: 'Verify email',
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${user.verificationToken}">Click verify email</a>`,
  };
  await sendEmail(verifyEmail);

  res.json({
    message: 'Verification successful',
  });
};

module.exports = resendVerifeEmail;
