const router = require('express').Router();
const userRoute = require('./user-route');
const dataRoute = require('./data-route');
const markersRoute = require('./markers-route');

router.use('/user', userRoute);
router.use('/data', dataRoute);
router.use('/markers', markersRoute);

module.exports = router;