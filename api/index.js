import { createRequestHandler } from "@remix-run/node";

export default async function handler(req, res) {
  const build = (await import("../build/server/index.js")).default;

  return createRequestHandler({
    build,
    mode: process.env.NODE_ENV,
  })(req, res);
}
