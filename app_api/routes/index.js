const express = require('express');

const router = express.Router();
const ctrlUsers = require('../controllers/user');
const ctrlTeams = require('../controllers/team');

router
  .route('/players')
  .get(ctrlTeams.findPlayer)
  .post(ctrlTeams.createPlayer);

  router
  .route('/playerPosition')
  .get(ctrlTeams.findPlayerByPosition);

  router
  .route('/user')
  .get(ctrlUsers.findUser)
  .post(ctrlUsers.createUser);

  router
  .route('/userpaul')
  .get(ctrlUsers.findUserByUsername);


module.exports = router;
