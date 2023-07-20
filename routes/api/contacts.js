const express = require('express');
const router = express.Router();
const { validateBody, isValidId, authenticate } = require('../../middlewares');
const { schemas } = require('../../models/contact');

const {
  getAll,
  getById,
  addContact,
  deleteContact,
  updateById,
  updateFavorite,
} = require('../../controllers/contacts/index');

router.get('/', authenticate, getAll);

router.get('/:contactId', authenticate, isValidId, getById);

router.post('/', authenticate, validateBody(schemas.addSchema), addContact);

router.delete('/:contactId', authenticate, isValidId, deleteContact);

router.put(
  '/:contactId',
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  updateById
);

router.patch(
  '/:contactId/favorite',
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  updateFavorite
);

module.exports = router;
