import { Router } from "express";
import { getAllRecords, getRecordById } from "./controllers/get";
import { createRecord } from "./controllers/post";
import { updateRecord } from "./controllers/put";
import { deleteRecord } from "./controllers/delete";
import isProtected from "../../../middlewares/isProtected";

const wpSales = Router();

wpSales
  .route("/")
  .get(isProtected, getAllRecords)
  .post(isProtected, createRecord)
  .put(isProtected, updateRecord)
  .delete(isProtected, deleteRecord);

wpSales.route("/:id").get(isProtected, getRecordById);

export default wpSales;
