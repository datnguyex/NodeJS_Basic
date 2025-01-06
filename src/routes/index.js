const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./Courses');
const meRouter = require('./me');
function route(app) {
    app.use('/courses', coursesRouter);
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/', siteRouter);
}
module.exports = route;
