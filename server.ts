const express = require("express");
const path = require('path');
const cors = require('cors');

// TypeScript types for better development experience
import { Request, Response } from "express";

const app = express();
const PORT = 3001;

// Middleware
app.use(cors({
  origin: 'http://localhost:8080',  // frontend dev server
}));
app.use(express.json());

// Serve static files from the built client
// When running with tsx directly, use 'dist/client'
// When running compiled version from dist/, use 'client'
const clientPath = __filename.includes('dist') ? 
  path.join(__dirname, 'client') : 
  path.join(__dirname, 'dist/client');
app.use(express.static(clientPath));

// API Routes
app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ 
    message: "Hello World from Express 5!", 
    timestamp: new Date().toISOString(),
    version: "1.0.0"
  });
});

// Catch-all handler: send back React's index.html file for any non-API routes
const indexPath = __filename.includes('dist') ? 
  path.join(__dirname, 'client/index.html') : 
  path.join(__dirname, 'dist/client/index.html');

app.get('/', (req: Request, res: Response) => {
  res.sendFile(indexPath);
});

app.get(/^(?!\/api).*/, (req: Request, res: Response) => {
  res.sendFile(indexPath);
});
 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api/hello`);
});
 