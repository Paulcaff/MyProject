const express = require('express');
const router = express.Router();
const ctrlRegister = require('../controllers/register');
const ctrlTeam = require('../controllers/team');

/* Locations pages */
router
    .get('/', ctrlRegister.index)
    .post('/',ctrlRegister.loginUser);

router
    .get('/register', ctrlRegister.register)
    .post('/register', ctrlRegister.registerUser);

router
    .get('/select', ctrlTeam.selectTeam);

router
    .get('/display', ctrlTeam.display);


module.exports = router;
