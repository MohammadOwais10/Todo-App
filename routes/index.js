const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');

console.log('router loaded');

router.get('/', homeController.home);
router.post('/create-list',homeController.create);
router.get('/delete-list',homeController.findByIdAndDelete);

module.exports = router;