import express from "express";
import { getAllData } from "../Controllers/getAllData.js";
import { getDataByPathParams } from "../Controllers/getDataByPathParams.js";

export const apiRouter = express.Router();

apiRouter.get("/", getAllData);

apiRouter.get("/:field/:term", getDataByPathParams);
