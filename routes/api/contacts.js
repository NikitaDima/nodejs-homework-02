const express = require('express');
const router = express.Router();
const { validateBody, isValidId } = require('../../middlewares');
const { schemas } = require('../../models/contact');
const controlles = require('../../controllers/contacts');

router.get('/', controlles.getAll);

router.get('/:contactId', isValidId, controlles.getById);

router.post('/', validateBody(schemas.addSchema), controlles.addContact);

router.delete('/:contactId', isValidId, controlles.deleteContact);

router.put(
  '/:contactId',
  isValidId,
  validateBody(schemas.addSchema),
  controlles.updateById
);

router.patch(
  '/:contactId/favorite',
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  controlles.updateFavorite
);

module.exports = router;
