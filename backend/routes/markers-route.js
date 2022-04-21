const router = require('express').Router();
const markersController = require('../controllers/MarkersController');

router.get('/get', markersController.fetchallMarkers);
router.post('/add', markersController.addMarker);

module.exports = router;