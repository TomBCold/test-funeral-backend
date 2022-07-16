const { Router } = require('express');
const AuthController = require('../controllers/auth.controller');

const router = Router();

router.get('/', AuthController.authorization);
router.post('/', AuthController.registration);

module.exports = router;
