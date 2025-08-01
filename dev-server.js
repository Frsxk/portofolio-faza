import { createRequestHandler } from "@react-router/dev/server";
import express from "express";

const PORT = Number.parseInt(process.env.PORT || "3000");

const app = express();
app.disable("x-powered-by");

console.log("Starting development server");

// Create Vite dev server
const viteDevServer = await import("vite").then((vite) =>
  vite.createServer({
    server: { middlewareMode: true },
    appType: "custom",
  }),
);

// Use Vite's middleware for handling static assets and HMR
app.use(viteDevServer.middlewares);

// Handle all routes with React Router
app.use("*", async (req, res, next) => {
  try {
    // Load the server build through Vite's SSR loader
    const build = await viteDevServer.ssrLoadModule("virtual:react-router/server-build");
    
    // Create the request handler
    const handler = createRequestHandler(build, process.env.NODE_ENV);
    
    // Convert Express req/res to Web API Request/Response
    const request = new Request(`http://localhost:${PORT}${req.originalUrl}`, {
      method: req.method,
      headers: req.headers,
      body: req.method !== "GET" && req.method !== "HEAD" ? req.body : undefined,
    });

    const response = await handler(request, {
      // Add any context you need here
    });

    // Convert Web API Response back to Express response
    res.status(response.status);
    
    // Set headers
    for (const [key, value] of response.headers.entries()) {
      res.set(key, value);
    }

    // Send body
    if (response.body) {
      const reader = response.body.getReader();
      const pump = async () => {
        const { done, value } = await reader.read();
        if (done) {
          res.end();
          return;
        }
        res.write(Buffer.from(value));
        return pump();
      };
      await pump();
    } else {
      res.end();
    }
  } catch (error) {
    if (typeof error === "object" && error instanceof Error) {
      viteDevServer.ssrFixStacktrace(error);
    }
    next(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});