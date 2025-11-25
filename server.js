import express from "express";

const PORT = 8000;

const app = express();

app.listen(PORT, () => console.log(`Server Connected To PORT ${PORT}`));
