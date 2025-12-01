import express from "express";
import { apiRouter } from "./Routes/apiRoutes.js";

const PORT = 8000;

const app = express();

app.use("/api", apiRouter);

app.listen(PORT, () => console.log(`Server Connected To PORT ${PORT}`));
