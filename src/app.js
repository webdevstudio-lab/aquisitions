import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from aqusitions ! ");
});

export default app;
