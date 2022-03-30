const Router = require("express").Router;

const { authMiddleware } = require("../middleware/auth-middleware");
const userController = require("../controllers/user-controller");

const UserRouter = Router();

UserRouter.use("/users", authMiddleware);

UserRouter.get("/", userController.getUsers);
UserRouter.get("/:userId", userController.getUserDetails);
UserRouter.post("/", userController.createUser);
UserRouter.patch("/:userId", userController.updateUser);
UserRouter.delete("/:userId", useruserController.deleteUser);
UserRouter.post("/sign-up", userController.signUp);

module.exports = UserRouter;
