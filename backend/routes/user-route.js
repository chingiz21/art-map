const router = require('express').Router();
const UserController = require('../controllers/UserContoller');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.get('/check', authMiddleware, UserController.check);

module.exports = router;