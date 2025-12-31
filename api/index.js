import { createRequestHandler } from '@remix-run/node';

export default async function handler(req, res) {
  // Dynamically import the server build
  const build = await import('../build/server/index.js');

  // Create the request handler
  const remixHandler = createRequestHandler({
    build,
    mode: process.env.NODE_ENV,
  });

  return remixHandler(req, res);
}

