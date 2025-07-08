# Vue.js + Express 5 TypeScript Application

A super basic Vue.js application with TypeScript that shows a "Hello World" static page using Vue Router and exposes a REST API with Express 5.

## Features

- Vue.js 3 with TypeScript
- Vue Router for client-side routing
- Express 5 server with TypeScript
- Single REST API endpoint (`/api/hello`)
- Static file serving for the Vue.js SPA
- Wildcard route to serve the SPA for any non-API routes

## Project Structure

```
├── src/
│   ├── components/
│   │   └── HelloWorld.vue      # Main Vue component
│   ├── App.vue                 # Root Vue component
│   ├── main.ts                 # Vue application entry point
│   └── vue-shim.d.ts          # TypeScript declarations for Vue
├── index.html                  # Main HTML file
├── server.ts                   # Express server
├── package.json                # Dependencies and scripts
├── tsconfig.json              # TypeScript config for Vue
├── tsconfig.node.json         # TypeScript config for Node
└── vite.config.ts             # Vite configuration
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Development mode (runs both frontend and backend):**
   ```bash
   npm run dev
   ```
   This will start:
   - Vue.js dev server on http://localhost:8080
   - Express API server on http://localhost:3001

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Start production server:**
   ```bash
   npm start
   ```
   This serves both the built Vue.js app and API on http://localhost:3001

## API Endpoints

- `GET /api/hello` - Returns a JSON response with "Hello World" message

## How it works

- The Express server serves static files from `dist/client` (built Vue.js app)
- API routes are prefixed with `/api/`
- A wildcard route (`*`) serves the Vue.js `index.html` for all non-API routes
- This allows Vue Router to handle client-side routing while preserving API functionality

## Development vs Production

- **Development**: Uses Vite dev server (port 8080) with proxy to Express API (port 3001)
- **Production**: Single Express server (port 3001) serves both static files and API
