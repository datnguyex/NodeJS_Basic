const Course = require('../models/Course');
class SitesController {
    async index(req, res, next) {
        try {
            const [countCoursesDelted, courses] = await Promise.all([
                Course.countDocumentsWithDeleted({ deleted: true }),
                Course.find({}).lean(),
            ]);
            res.render('home', { countCoursesDelted, courses });
        } catch (error) {
            next(error);
        }
    }
    search(req, res) {
        res.render('search');
    }
}
//viet theo function co the lam tuong tu cai config
//-> Course.search
//.lean được sử dụng để lấy dữ liệu từ cơ sở dữ liệu dưới dạng plain JavaScript objects thay vì Mongoose documents
module.exports = new SitesController();
