const db = require("../models");

async function signUp(req, res, next) {
  const { uid, email, firstName } = req.user;

  try {
    const user = await db.User.findOne({ email: email });

    if (user) {
      return res.sendStatus(200);
    }

    const newUser = await db.User.create({
      _id: uid,
      email: email,
      firstName: firstName,
    });

    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
}

async function getUsers(req, res, next) {
  try {
    const users = await db.User.find({}).lean().exec();

    res.status(200).send({
      data: users,
    });
  } catch (error) {
    next(error);
  }
}

async function getSingleUser(req, res, next) {
  const { userId } = req.params;

  try {
    const user = await db.User.findOne({
      _id: userId,
    })
      .lean()
      .exec();

    res.status(200).send({
      data: user,
    });
  } catch (error) {}
}

async function updateUser(req, res, next) {
  const { userId } = req.params;
  const { firstName, lastName, profileImage, admin } = req.body;

  try {
    const updatedUser = await db.User.findOneAndUpdate(
      { _id: userId },
      {
        $set: {
          firstName: firstName,
          lastName: lastName,
        },
      },
      {
        new: true,
      }
    );

    res.status(200).send({
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteUser(req, res, next) {
  const { userId } = req.params;

  try {
    const result = await db.User.deleteOne({
      _id: userId,
    }).lean();

    if (result.ok === 1 && result.deletedCount === 1) {
      res.status(200).send({
        data: "User removed",
      });
    } else {
      res.status(500).send({
        data: "User not removed",
      });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  signUp: signUp,
  getUsers: getUsers,
  getSingleUser: getSingleUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
};
