const Course = require('../models/Course');
class courseController {
    create(req, res) {
        res.render('courses/create');
    }
    store(req, res) {
        const course = new Course(req.body);
        course.save().then(() => res.redirect('/'));
    }
    edit(req, res) {
        Course.findOne({ _id: req.params.id })
            .lean()
            .then((course) => {
                res.render('courses/edit', { course });
            })
            .catch((error) => {
                next(error);
            });
    }
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/'))
            .catch(next);
    }
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('/'))
            .catch(next);
    }
    deleteForce(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/'))
            .catch(next);
    }

    show(req, res) {
        Course.findOne({ slug: req.params.slug })
            .lean()
            .then((course) => {
                res.render('courses/show', { course });
            })
            .catch((error) => {
                next(error);
            });
    }
    trashCourses(req, res) {
        Course.findWithDeleted({ deleted: true })
            .lean()
            .then((courses) => {
                res.render('me/trash-courses', { courses });
            })
            .catch((error) => {
                next(error);
            });
    }
    restore(req, res) {
        Course.restore({ _id: req.params.id })
            .then((courses) => {
                res.redirect('/');
            })
            .catch((error) => {
                next(error);
            });
    }
}
//viet theo function co the lam tuong tu cai config
//-> Course.search
//.lean được sử dụng để lấy dữ liệu từ cơ sở dữ liệu dưới dạng plain JavaScript objects thay vì Mongoose documents
module.exports = new courseController();
