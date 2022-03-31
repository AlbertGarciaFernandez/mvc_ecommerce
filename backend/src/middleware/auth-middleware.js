const { auth } = require("../firebase/firebase");

async function authMiddleware(req, res, next) {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    const bearerToken = req.headers.authorization.substr(7);

    try {
      const userClaims = await auth.verifyIdToken(bearerToken);
      const { email, uid } = userClaims;
      const { firstName } = req.body; // is used in signup
      req.user = { email: email, uid: uid, firstName: firstName };

      next();
    } catch (error) {
      next(error);
    }
  } else {
    return res.status(401).send({
      data: null,
      error: "Unauthorized",
    });
  }
}

module.exports = {
  authMiddleware: authMiddleware,
};
