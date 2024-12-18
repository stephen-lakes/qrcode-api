import express, { Application, Request, Response } from 'express';
import QRCode from 'qrcode';

const app: Application = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res)=> {
    res.send("WELCOME TO QSRCODE GEN")
})

// Endpoint to generate QR Code
// app.post('/generate', async (req: Request, res: Response) => {
//   try {
//     const { text } = req.body;
//     if (!text) {
//       return res.status(400).send({ error: 'Text is required' });
//     }

//     const qrCodeImageUrl = await QRCode.toDataURL(text);
//     res.send({ qrCodeImageUrl });
//   } catch (error) {
//     res.status(500).send({ error: 'Failed to generate QR Code' });
//   }
// });

export default app;
