# React Express App

A minimal React TSX application with Express 5 backend.

## Features

- React 18 with TypeScript (TSX)
- React Router for client-side routing
- Express 5 server
- REST API endpoint
- Single Page Application (SPA) routing
- Serves both API and static files from one server

## Quick Start

```bash
# Install dependencies
npm install

# Start the development server (frontend only)
npm run dev

# Build and start the production server (API + SPA)
npm start
```

## Development

- Frontend: http://localhost:8080
- Backend API: http://localhost:3001/api/hello

## Project Structure

- `src/App.tsx` - Main React component with routing
- `src/main.tsx` - React application entry point
- `server.ts` - Express 5 server with API and static file serving
- `index.html` - Entry point HTML file

## How it works

1. The Express server serves the React build files as static content
2. API routes are handled by Express (`/api/*`)
3. All other routes are handled by React Router (SPA wildcard route)
4. Both the React app and API are served from the same Express server on port 3001
