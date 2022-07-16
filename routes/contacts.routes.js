const express = require('express');

const router = express.Router();

const auth = require('../middleware/auth.middleware');
const ContactsController = require('../controllers/contacts.controller');

router.get('/', auth, ContactsController.getContact);
router.post('/', auth, ContactsController.createContact);
router.put('/', auth, ContactsController.updateContact);
router.delete('/', auth, ContactsController.delContact);

module.exports = router;
