const router = require('express').Router();
const apiRoutes = require('./api');

const homePage = require('./homepageRoute');

router.use('/', homePage);
router.use('/api', apiRoutes);


module.exports = router;
