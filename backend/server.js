import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("Server is ready");
});

app.get("/test", (req, res) => {
    res.send("Test route works!");
});

app.listen(5000, () => {
    console.log("Server started at http://localhost:5000");
});