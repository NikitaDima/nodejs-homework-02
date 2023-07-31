const path = require('path');
const { User } = require('../../models/user');
const avatarDir = path.join(__dirname, '../', '../', 'public', 'avatars');
const fs = require('fs/promises');

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const fileName = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarDir, fileName);
  await fs.rename(tempUpload, resultUpload);
  const avatarUrl = path.join('avatars', fileName);
  await User.findByIdAndUpdate(_id, { avatarUrl });

  res.json({
    avatarUrl,
  });
};

module.exports = updateAvatar;
