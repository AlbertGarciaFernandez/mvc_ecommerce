const db = require("../models");

async function adminMiddleware(req, res, next) {
  const userId = req.user.uid;

  try {
    const user = await db.User.findOne({
      _id: userId,
    })
      .lean()
      .exec();

    if (user.admin) {
      next();
    } else {
      return res.status(401).send({
        data: null,
        error: "Unauthorized",
      });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  adminMiddleware: adminMiddleware,
};
