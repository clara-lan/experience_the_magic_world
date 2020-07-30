const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');
const profileCtrl = require('../../controllers/profile');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

/*---------- Protected Routes ----------*/
router.get('/:id/profile', profileCtrl.getProfile);
router.post('/:id/profile', profileCtrl.createAndUpdate);

module.exports = router;
