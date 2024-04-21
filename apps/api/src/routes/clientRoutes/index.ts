import { Router } from "express";
import { getAllRecords, getRecordById } from "./controllers/get";
import { createRecord } from "./controllers/post";
import { updateRecord } from "./controllers/put";
import { deleteRecord } from "./controllers/delete";
import isProtected from "../../middlewares/isProtected";

const clientRoutes = Router();

clientRoutes
  .route("/")
  .get(isProtected, getAllRecords)
  .post(isProtected, createRecord)
  .put(isProtected, updateRecord)
  .delete(isProtected, deleteRecord);

clientRoutes.route("/:id").get(isProtected, getRecordById);

export default clientRoutes;
