module.exports = {

    homePage: (req, res, next) => {
        res.render('homepage');
    },

    projectsPage: (req, res, next) => {
        res.render('projects');
    },

    contactPage: (req, res, next) => {
        res.render('contact');
    },
}