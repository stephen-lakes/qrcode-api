import express, { Application, Request, Response } from "express";
import QRCode from "qrcode";

const app: Application = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send("WELCOME TO QSRCODE GEN");
});

// Endpoint to generate QR Code
app.post("/generate", (req, res) => {
  const { text } = req.body;

  try {
  } catch (error) {
    res.status(500).json({ error: "Unable to generate QRCode" });
  }
});
export default app;
