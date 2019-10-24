const express = require('express');

const router = express.Router();
const ctrlUsers = require('../controllers/user');
const ctrlTeams = require('../controllers/team');

router
  .route('/players')
  .get(ctrlTeams.findPlayer)
  .post(ctrlTeams.createPlayer)
  .delete(ctrlTeams.deletePlayer);
  
router
  .route('/age/:playerId')
  .put(ctrlTeams.updateAge);

router
  .route('/position/:playerId')
  .put(ctrlTeams.updatePosition);

router
  .route('/weight/:playerId')
  .put(ctrlTeams.updateWeight);

  router
  .route('/image/:playerId')
  .put(ctrlTeams.updateImage);

router
  .route('/name/:playerId')
  .put(ctrlTeams.updateName);

router
  .route('/playerPosition')
  .get(ctrlTeams.findPlayerByPosition);

  router
  .route('/user')
  .get(ctrlUsers.findUser)
  .post(ctrlUsers.createUser)
  .delete(ctrlUsers.deleteUserByUsername);

  router
  .route('/userpaul')
  .get(ctrlUsers.findUserByUsername);

  router
  .route('/username/:userId')
  .put(ctrlUsers.updateUsername);

  router
  .route('/firstname/:userId')
  .put(ctrlUsers.updateFirstname);

  router
  .route('/lastname/:userId')
  .put(ctrlUsers.updateLastname);

  router
  .route('/email/:userId')
  .put(ctrlUsers.updateEmail);

  router
  .route('/password/:userId')
  .put(ctrlUsers.updatePassword);


module.exports = router;
