const express = require('express');
const router = express.Router();
const ctrlRegister = require('../controllers/register');
const ctrlTeam = require('../controllers/team');
const ctrlUserTeam = require('../controllers/userTeamList');

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

router
    .get('/userteam', ctrlUserTeam.createUserTeam);

    //link to method to call api to add players to the selectedPlayersList
router
    .get('/userteamPlayers/:name/:number', ctrlUserTeam.addSelectedPlayer);




module.exports = router;
