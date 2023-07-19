const { Contact } = require('../../models/contact');

const { HttpError } = require('../../helpers');

const deleteContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw HttpError(404, 'Not Found');
  }

  res.json({ message: 'Delete success' });
};

module.exports = deleteContact;
