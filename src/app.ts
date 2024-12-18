import express, { Application, Request, Response } from "express";
import QRCode from "qrcode";

const app: Application = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send("WELCOME TO QSRCODE GEN");
});

// Endpoint to generate QR Code
app.post("/generate", async (req, res) => {
  const { text } = req.body;

  try {
    if (!text) {
      res.status(400).send({ error: "Text is required" });
      return;
    }
    const qrCodeImageUrl = await QRCode.toDataURL(text);
    res.send({ qrCodeImageUrl });
  } catch (error) {
    res.status(500).json({ error: "Unable to generate QRCode" });
  }
});
export default app;
