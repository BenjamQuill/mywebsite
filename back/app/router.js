const { Router } = require('express');
const router = Router();
const mainController = require('./controllers/mainController');

router.get('/', mainController.homePage);

router.get('/projects', mainController.projectsPage);

router.get('/contact', mainController.contactPage);

module.exports = router;
    