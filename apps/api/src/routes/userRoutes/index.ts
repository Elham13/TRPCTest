import { Router } from "express";
import { getAllUsers, getUserById } from "./controllers/get";
import { createUser, login } from "./controllers/post";
import { updateUser } from "./controllers/put";
import { deleteUser } from "./controllers/delete";
import isProtected from "../../middlewares/isProtected";

const userRoutes = Router();

userRoutes
  .route("/")
  .get(isProtected, getAllUsers)
  .post(createUser)
  .put(isProtected, updateUser)
  .delete(isProtected, deleteUser);

userRoutes.route("/:id").get(isProtected, getUserById);

userRoutes.route("/login").post(login);

export default userRoutes;
