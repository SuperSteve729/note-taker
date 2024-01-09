const router = require('express').Router();

const htmlRouter = require('./html-route');
// const apiRouter = require('./api-route');

router.use('/', htmlRouter);
// router.use('/api', apiRouter);

module.exports = router;
