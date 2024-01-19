const express = require('express');
const router = express.Router();
const sendJson = require('../shared/sendJson');
const userController = require('../Controller/userController');

router.route('/signup').post(async (req, res) => {
  const data = await userController.signup(req, res);
  sendJson(res, data);
});

router.route('/login').post(async (req, res) => {
  const data = await userController.login(req, res);
  sendJson(res, data);
});

router
  .route('/users/:id?')
  .get(async (req, res) => {
    const data = await userController.getUser(req, res);
    sendJson(res, data);
  })
  router
  .route('/users_list')
  .get(async (req, res) => {
    const data = await userController.listUser(req, res);
    sendJson(res, data);
  })
 


module.exports = router;