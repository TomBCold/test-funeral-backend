const express = require('express');
const upload = require('../middleware/image.middleware');

const router = express.Router();

const auth = require('../middleware/auth.middleware');
const CompaniesController = require('../controllers/companies.controller');

router.get(
  '/',
  auth,
  CompaniesController.getCompany,
);

router.post(
  '/',
  auth,
  CompaniesController.createCompany,
);

router.put(
  '/',
  auth,
  upload.single('file'),
  CompaniesController.updateCompany,
);

router.delete(
  '/',
  auth,
  CompaniesController.delCompany,
);

module.exports = router;
