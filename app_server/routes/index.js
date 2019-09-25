const express = require('express');
const router = express.Router();
const ctrlRegister = require('../controllers/register');
const ctrlTeam = require('../controllers/team');

/* Locations pages */
router.get('/', ctrlRegister.index);
router.get('/register', ctrlRegister.register);
router.get('/select', ctrlTeam.selectTeam);
router.get('/display', ctrlTeam.display);

module.exports = router;
