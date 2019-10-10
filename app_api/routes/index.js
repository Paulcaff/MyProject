const express = require('express');

const router = express.Router();
const ctrlUsers = require('../controllers/user');
const ctrlTeams = require('../controllers/team');

// locations

// router
//   .route('/display')
//   .get(ctrlTeams.getTeam);
  
  //.post(ctrlLocations.locationsCreate);
router
  .route('/team')
  .get(ctrlTeams.findPlayer);
// router
//   .route('/locations/:locationid')
//   .get(ctrlLocations.locationsReadOne)
//   .put(ctrlLocations.locationsUpdateOne)
//   .delete(ctrlLocations.locationsDeleteOne);
  
// // reviews
// router
//   .route('/locations/:locationid/reviews')
//   .post(ctrlReviews.reviewsCreate);

// router
//   .route('/locations/:locationid/reviews/:reviewid')
//   .get(ctrlReviews.reviewsReadOne)
//   .put(ctrlReviews.reviewsUpdateOne)
//   .delete(ctrlReviews.reviewsDeleteOne);


// router.get('/', ctrlRegister.index);
// router.get('/register', ctrlRegister.register);
// router.get('/select', ctrlTeam.selectTeam);
// router.get('/display', ctrlTeam.display);

module.exports = router;
