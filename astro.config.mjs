import { defineConfig, envField } from "astro/config";
import { viteStaticCopy } from "vite-plugin-static-copy";

import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [],
  experimental: {
    env: {
      schema: {
        // Site metadata — import with e.g. `import { GITHUB_URL } from "astro:env/client"`
        TWITTER_URL: envField.string({
          context: "client",
          access: "public",
          default: "https://twitter.com/gongfudev",
        }),
        GITHUB_URL: envField.string({
          context: "client",
          access: "public",
          default: "https://github.com/gongfu-dev",
        }),
        DISCORD_INVITE_URL: envField.string({
          context: "client",
          access: "public",
          default: "https://discord.gg/Z2X68VvHem",
        }),
      },
    },
  },
  vite: {
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: "node_modules/@shoelace-style/shoelace/dist/assets/**/*",
            dest: "./shoelace/assets",
          },
        ],
      }),
    ],
  },
});
