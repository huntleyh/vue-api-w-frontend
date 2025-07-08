# React Express App

A minimal React TSX application with Express 5 backend that serves both API and SPA from a single server.

## Features

- React 18 with TypeScript (TSX)
- React Router for client-side routing
- Express 5 server with TypeScript
- REST API endpoint (`/api/hello`)
- Single server deployment - serves both API and static files
- Azure App Service ready

## Quick Start

### Development
```bash
# Install dependencies
npm install

# Start Vite dev server (with hot reload)
npm run dev
# Opens http://localhost:8080 (proxies API calls to port 3001)
```

### Production (Single Server)
```bash
# Install dependencies
npm install

# Build the React app
npm run build

# Start the server (serves both API and React app)
npm start
# Opens http://localhost:3001 (both app and API)
```

## API Endpoints

- `GET /api/hello` - Returns a JSON "Hello World" message

## How it works

1. **Express static middleware** serves React build files from `dist/client/`
2. **API routes** handle `/api/*` endpoints
3. **Wildcard route** serves React's `index.html` for all other routes
4. **React Router** handles client-side routing

## Azure App Service Deployment

1. **Build Command**: `npm run build`
2. **Startup Command**: `npm start`

The server automatically serves both the React SPA and API endpoints from port 3001.

## Project Structure

- `src/App.tsx` - Main React component with routing
- `src/main.tsx` - React application entry point
- `server.ts` - Express 5 server with API and static file serving
- `index.html` - Entry point HTML file

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
