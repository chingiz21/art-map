const router = require('express').Router();
const dataController = require('../controllers/DataController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/add', checkRole('ADMIN'), dataController.addArtObject);
router.get('/get', dataController.fetchAll);
router.get('/one', dataController.getOne);

module.exports = router;