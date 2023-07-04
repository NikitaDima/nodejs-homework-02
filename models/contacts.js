const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');

const pathContacts = path.join(__dirname, 'contacts.json');

const listContacts = async () => {
  const data = await fs.readFile(pathContacts);
  return JSON.parse(data);
};

const getContactById = async contactId => {
  const contacts = await listContacts();
  const contact = contacts.find(c => c.id === contactId);
  return contact || null;
};

const removeContact = async contactId => {
  const contacts = await listContacts();
  const index = contacts.findIndex(c => c.id === contactId);
  if (index === -1) {
    return null;
  }
  const removedContact = contacts.splice(index, 1);
  await fs.writeFile(pathContacts, JSON.stringify(contacts, null, 2));
  return removedContact;
};

const addContact = async body => {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    ...body,
  };
  contacts.push(newContact);
  await fs.writeFile(pathContacts, JSON.stringify(contacts, null, 2));
  return newContact;
};

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const index = contacts.findIndex(c => c.id === contactId);
  if (index === -1) {
    return null;
  }
  contacts[index] = { id: contactId, ...body };
  await fs.writeFile(pathContacts, JSON.stringify(contacts, null, 2));
  return contacts[index];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
