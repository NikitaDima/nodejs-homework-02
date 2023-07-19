const { Contact } = require('../../models/contact');

const getAll = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;
  const query = owner;
  if (favorite && favorite.toLowerCase() === 'true') {
    query.favorite = true;
  }
  const result = await Contact.find({ owner }, '-createdAt -updatedAt', {
    skip: skip,
    limit,
  }).populate('owner', 'email');
  res.json(result);
};

module.exports = getAll;
