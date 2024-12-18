import app from "./app";

const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`QR Code API running at http://localhost:${port}`);
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});
