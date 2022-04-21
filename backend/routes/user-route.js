const router = require('express').Router();
const UserController = require('../controllers/UserContoller');

router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.get('/auth', UserController.checkAuth);

module.exports = router;