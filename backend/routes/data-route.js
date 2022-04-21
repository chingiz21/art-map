const router = require('express').Router();
const dataController = require('../controllers/DataController');

router.post('/add', dataController.addArtObject);
router.get('/get', dataController.fetchAll);
router.get('/one', dataController.getOne);

module.exports = router;