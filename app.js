require("dotenv").config();
const express = require('express');
const app = express();
const userRouter = require("./api/users/userRouter")

app.use(express.json());

const PORT = process.env.APP_PORT || 3000;

app.use("/api/users", userRouter);

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});