import express, { Request, Response } from "express";
import path from 'path';
import cors from 'cors';

const app = express();
const PORT = 3001;

// Middleware
app.use(cors({
  origin: 'http://localhost:8080',  // frontend dev server
}));
app.use(express.json());

// Serve static files from the built client
app.use(express.static(path.join(__dirname, 'dist/client')));

// API Routes
app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ 
    message: "Hello World from Express 5!", 
    timestamp: new Date().toISOString(),
    version: "1.0.0"
  });
});

// Catch-all handler: send back React's index.html file for any non-API routes
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'dist/client/index.html'));
});

app.get(/^(?!\/api).*/, (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'dist/client/index.html'));
});
 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api/hello`);
});
 