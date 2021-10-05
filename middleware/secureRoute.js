import jwt from "jsonwebtoken";
import User from "../models/user.js";

// async function is required, and need to make sure the user making the request has a valid token

async function secureRoute(req, res, next) {
  try {
    const authToken = req.headers.authorization;

    // need an if statement for if not a valid token or the token doesn't start with bearer
    if (!authToken || !authToken.startsWith("Bearer"))
      return res.status(401).send({ message: "Unauthorised - Invalid Token" });

    const token = authToken.replace("Bearer ", "");

    // below function is for getting the data from the token
    jwt.verify(token, process.env.SECRET, async (error, data) => {
      if (error) {
        return res.status(401).send({ message: "Unauthorised" });
      }
      // so if it's a valid token, we'll need ot find that user
      const user = await User.findById(data.userId);

      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }

      req.currentUser = user; // noticed this in classwork, did we go over this?
    });
  } catch (error) {
    // make sure we're not putting next(error) as want to just log a message for not found user
    return res.status(401).send({ message: "User not found" });
  }
}

export default secureRoute;
