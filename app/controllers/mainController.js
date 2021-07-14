const projects = require('../../data/data.json');

module.exports = {

    homePage: (req, res, next) => {
        res.render('homepage');
    },

    projectsPage: (req, res, next) => {
        res.render('projects', {projects});
    },

    contactPage: (req, res, next) => {
        res.render('contact');
    },
}