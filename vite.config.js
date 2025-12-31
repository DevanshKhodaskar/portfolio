import { vitePlugin as remix } from '@remix-run/dev';
import { vercelPreset } from '@vercel/remix'; // Add this
import { defineConfig } from 'vite';
// ... other imports

export default defineConfig({
  // ... existing config
  plugins: [
    mdx({ /* ... */ }),
    remix({
      presets: [vercelPreset()], // Add this line
      routes(defineRoutes) {
        return defineRoutes(route => {
          route('/', 'routes/home/route.js', { index: true });
        });
      },
    }),
    jsconfigPaths(),
  ],
});