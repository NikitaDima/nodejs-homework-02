const { ctrlWrapper } = require('../../helpers');

const getAll = require('./getAll');

const getById = require('./getById');

const addContact = require('./addContact');

const deleteContact = require('./deleteContact');

const updateById = require('./updateById');

const updateFavorite = require('./updateFavorite');

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  addContact: ctrlWrapper(addContact),
  deleteContact: ctrlWrapper(deleteContact),
  updateById: ctrlWrapper(updateById),
  updateFavorite: ctrlWrapper(updateFavorite),
};
