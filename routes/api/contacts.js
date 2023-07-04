const express = require('express');
const router = express.Router();
const validateBody = require('../../middlewares/validateBody');
const schemas = require('../../schemas/contactsSchemas');
const controlles = require('../../controllers/contacts');

router.get('/', controlles.getAll);

router.get('/:contactId', controlles.getById);

router.post('/', validateBody(schemas.addSchema), controlles.addContact);

router.delete('/:contactId', controlles.deleteContact);

router.put(
  '/:contactId',
  validateBody(schemas.addSchema),
  controlles.updateById
);

module.exports = router;
