// const express = require('express');
const router = require('express').Router();
// const app = express();
const blabberRoutes = require('./blabberRoutes'); // Ensure this path is correct
// const app = express;

router.use('/blabber', blabberRoutes);
router.use((req, res) => res.send('Blabber'));

module.exports = router;