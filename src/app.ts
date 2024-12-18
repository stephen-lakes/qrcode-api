import express, { Application, Request, Response } from "express";
import path from "path";
import QRCode from "qrcode";

const app: Application = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send("WELCOME TO QSRCODE GEN");
});

/** @swagger
 *  components:
 *  schemas:
 *   QRCodeRequest:
 *      type: object
 *      required:
 *          - text
 *      properties:
 *          text:
 *              type: string
 *              description: Text to encode in the QR Code
 *   QRCodeResponse:
 *      type: object
 *      properties:
 *          qrCodeImageUrl:
 *              type: string
 *              description: Base64 encoded QR Code image
 */

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

app.post("/generate-file", async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      res.status(400).send({ error: "Text is required" });
      return;
    }
    const qrCodeImageUrl = await QRCode.toDataURL(text);

    const htmlResponse = ` 
    <img src="${qrCodeImageUrl}" alt="QR Code"> 
    // <!DOCTYPE html> 
    //     <html lang="en"> 
    //         <head> 
    //             <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    //             <title>QR Code</title> 
    //         </head> 
    //         <body> 
    //             <h1>Your QR Code</h1> 
    //             <img src="${qrCodeImageUrl}" alt="QR Code"> 
    //         </body> 
    //     </html> 
    `;

    res.send({ message: "QR Code generated successfully", htmlResponse });
  } catch (error) {
    res.status(500).json({ error: "Unable to generate QRCode" });
  }
});

export default app;
