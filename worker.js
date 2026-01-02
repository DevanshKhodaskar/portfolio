import { createRequestHandler } from "@remix-run/cloudflare";
import * as build from "./build/server/index.js";

const handleRequest = createRequestHandler(build);

export default {
    async fetch(request, env, ctx) {
        const loadContext = {
            cloudflare: {
                env,
                ctx,
            },
        };
        return handleRequest(request, loadContext);
    },
};
